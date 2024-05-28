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

interface PredictionsProps {
    columns: any;
}

export default function componentDatabase({ columns }: PredictionsProps) {

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