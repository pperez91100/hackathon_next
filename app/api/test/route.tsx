import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
          return new Response(
              JSON.stringify({ success: true, message: "Hello - Test"}),
              {
                  headers: { "Content-Type": "application/json" },
              }
          );
}