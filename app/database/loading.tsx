import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Loading() {
  const itemsColumns = Array.from({ length: 12 });

  const itemsRows = Array.from({ length: 50 });

  return (
    <div>
        <Table>
            <TableCaption>Database Jo</TableCaption>
            <TableHeader>
                <TableRow>
                    {itemsColumns.map((_, index) => (
                        <TableHead key={index}><Skeleton className="w-[100px] h-[30px]"/></TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {itemsRows.map((_, index) => (
                    <TableRow key={index}>
                        {itemsColumns.map((_, index) => (
                            <TableCell key={index}><Skeleton className="w-[100px] h-[30px]"/></TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
