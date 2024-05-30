'use client';

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

interface Data {
  [key: string]: any;
}

interface DatabaseProps {
  data1: Data[];
  data2: Data[];
}

export default function Database({ data1, data2 }: DatabaseProps) {
  const [selectedData, setSelectedData] = useState<Data[]>(data1);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [displayedRows, setDisplayedRows] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 50;

  useEffect(() => {
    // Sélection des colonnes basées sur la première ligne de données
    if (selectedData.length > 0) {
      setSelectedColumns(Object.keys(selectedData[0]));
    }
  }, [selectedData]);

  useEffect(() => {
    // Calcul de l'index de départ en fonction de la page actuelle
    const startIndex = (currentPage - 1) * rowsPerPage;
    // Limite des lignes affichées à la page actuelle
    setDisplayedRows(selectedData.slice(startIndex, startIndex + rowsPerPage));
  }, [selectedData, currentPage]);

  const totalPages = Math.ceil(selectedData.length / rowsPerPage);

  const switchData = (newData: Data[]) => {
    setSelectedData(newData);
  };

  const exportToExcel = (data: Data[], filename: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, filename);
  };

  return (
    <div>
      <div className="flex w-full">
        <Button
          className={`flex-1 lg:flex-none px-4 py-2 rounded-none hover:bg-blue-500 ${
            selectedData === data1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => switchData(data1)}
        >
          ATHLETES JO
        </Button>
        <Button
          className={`flex-1 lg:flex-none px-4 py-2 rounded-none hover:bg-blue-500 ${
            selectedData === data2 ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => switchData(data2)}
        >
          RESULTS JO
        </Button>
        <Button
          className='flex-1 lg:flex-none px-4 py-2 rounded-none hover:bg-green-500 bg-green-500 text-white'
          onClick={() => exportToExcel(selectedData, selectedData === data1 ? 'data1.xlsx' : 'data2.xlsx')}
        >
          EXPORT EXCEL
        </Button>
      </div>
      <Table>
        <TableCaption>Database</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 hover:bg-gray-100">
            {selectedColumns.map((column: string, index: number) => (
              <TableHead className="text-center" key={index}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedRows.map((row: Data, index: number) => (
            <TableRow key={index}>
              {selectedColumns.map((column: string, columnIndex: number) => (
                <TableCell className="text-center" key={columnIndex}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center space-x-4 p-4">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 text-white bg-gray-800 rounded-md disabled:bg-gray-300 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Previous
        </Button>
        <span className="text-gray-600">{`Page ${currentPage} sur ${totalPages}`}</span>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 text-white bg-gray-800 rounded-md disabled:bg-gray-300 disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
