import { BASE_API_URL } from "@/utils/constants"
import Database from "@/components/database";

export default async function PageDatabase() {

    function formatColumnName(columnName: string): string {
        return columnName
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    function formatRows(rows: any[]): any[] {
        return rows.map(row => {
            const formattedRow: any = {};
            for (const key in row) {
                if (row.hasOwnProperty(key)) {
                    let value = row[key];
                    // Remplacer les valeurs vides par 'N'
                    if (value === null || value === undefined || value === '') {
                        value = 'NULL';
                    }
                    formattedRow[formatColumnName(key)] = value;
                }
            }
            return formattedRow;
        });
    }

    const response = await fetch(`${BASE_API_URL}/api/showdatabase`,{ cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    
    const data1 = formatRows(data.athletes_jo);
    const data2 = formatRows(data.results_jo);

    return (
        <Database data1={data1} data2={data2} />
    );
  }