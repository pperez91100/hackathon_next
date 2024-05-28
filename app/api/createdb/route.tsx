import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import pool from '@/app/db';

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const query = `
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

        // Exécuter la requête pour créer la table
        await pool.query(query);

        return NextResponse.json('Table created successfully');
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.', { status: 500 });
    }
}