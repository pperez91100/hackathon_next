import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import pool from '@/app/db';

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


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Sélectionner toutes les lignes de la table 'athletes_jo'
        const athletesJoResult = await pool.query('SELECT * FROM athletes_jo;');
        // Formater les clés des colonnes
        const athletes_jo = formatRows(athletesJoResult.rows);

        // Sélectionner toutes les lignes de la table 'results_jo'
        const resultsJoResult = await pool.query('SELECT * FROM results_jo;');
        // Formater les clés des colonnes
        const results_jo = formatRows(resultsJoResult.rows);

        return NextResponse.json({ athletes_jo, results_jo });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.');
    }
}
