'use server';

import { BASE_API_URL } from "@/utils/constants"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

// Fonction pour formater les noms de colonnes
function formatColumnName(columnName: string) {
    return columnName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

export default async function Page() {

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`);
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }
  
    const data = await response.json();
    
    const columns = data.database.fields.map((field: { name: string; }) => formatColumnName(field.name));
    
    return (
        <div>
            <Table>
                <TableCaption>Database Jo</TableCaption>
                <TableHeader>
                    <TableRow>
                        {columns.map((column: string) => (
                            <TableHead key={column}>{column}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                {/* <TableBody>
                    {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                    ))}
                </TableBody> */}
            </Table>
        </div>
    );
  }