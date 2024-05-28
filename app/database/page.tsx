'use server'

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

export default async function PageDatabase() {

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`,{ cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }
  
    const data = await response.json();

    const columns = data.database.fields.map((field: { name: string; }) => field.name);

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