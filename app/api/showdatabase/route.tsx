import { sql } from '@vercel/postgres';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import pool from '@/app/db';

export async function GET(req: NextRequest, res: NextResponse) {
    try {

        // Sélectionner toutes les lignes de la table 'jo'
        const database = await pool.query('SELECT * FROM jo;');

        return NextResponse.json({ database }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.', { status: 500 });
    }
}