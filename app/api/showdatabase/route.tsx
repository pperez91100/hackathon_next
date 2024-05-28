import { sql } from '@vercel/postgres';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    try {

        const database = await sql`SELECT * FROM jo;`;

        return NextResponse.json({ database }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse('Error processing request.', { status: 500 });
    }
}