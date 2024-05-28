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

    function formatColumnName(columnName: string) {
        return columnName
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`,{ cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const data = await response.json();
    
    const columns = data.database.fields.map((field: { name: string; }) => formatColumnName(field.name));
    console.log(columns);
    
    return (
        <div>
            <Table className="bg-gray-800">
                <TableCaption>Database Jo</TableCaption>
                <TableHeader>
                    <TableRow>
                        {columns.map((column: string) => (
                            <TableHead key={column}>{column}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    );
  }