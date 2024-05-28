import { sql } from '@vercel/postgres';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // Créer la table si elle n'existe pas
        const result = await sql`
            CREATE TABLE IF NOT EXISTS jo (
                discipline_title VARCHAR,
                slug_game VARCHAR,
                event_title VARCHAR,
                event_gender VARCHAR,
                medal_type VARCHAR,
                participant_type VARCHAR,
                participant_title VARCHAR,
                athlete_url VARCHAR,
                athlete_full_name VARCHAR,
                country_name VARCHAR,
                country_code VARCHAR,
                country_3_letter_code VARCHAR
            );
        `;

        // Chemin vers le fichier CSV
        // const filePath = path.join(process.cwd(), '/public/olympic_medals.csv');
        const test = await sql`SELECT * FROM jo;`;

        return NextResponse.json({ test }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.', { status: 500 });
    }
}