import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    return new Response(
        JSON.stringify({ success: true, data: 'test' }),
        {
            headers: { "Content-Type": "application/json" },
        }
    );
}
