import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import pool from '@/app/db';




export async function GET(req: NextRequest, res: NextResponse) {
    try {
        
        // Sélectionner jusqu'à 1000 lignes de la table 'athletes_jo'
        const athletesJoResult = await pool.query('SELECT * FROM athletes_jo LIMIT 1000;');
        // Formater les clés des colonnes
        const athletes_jo = athletesJoResult.rows;

        // Sélectionner jusqu'à 1000 lignes de la table 'results_jo'
        const resultsJoResult = await pool.query('SELECT * FROM results_jo LIMIT 1000;');
        // Formater les clés des colonnes
        const results_jo = resultsJoResult.rows;

        return NextResponse.json({ athletes_jo, results_jo }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.', { status: 500 });
    }
}
