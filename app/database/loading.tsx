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
  const items = Array.from({ length: 12 });

  return (
    <div>
        <Table className="bg-gray-800">
            <TableCaption>Database Jo</TableCaption>
            <TableHeader>
                <TableRow>
                    {items.map((_, index) => (
                        <TableHead key={index}><Skeleton className="w-[100px] h-[30px]"/></TableHead>
                    ))}
                </TableRow>
            </TableHeader>
        </Table>
    </div>
  );
}
