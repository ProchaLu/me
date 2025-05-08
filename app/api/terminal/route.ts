import { NextResponse } from 'next/server';

export type TerminalResponsePost =
  | {
      code: string;
    }
  | {
      error: string;
    };

export async function POST(
  request: Request,
): Promise<NextResponse<TerminalResponsePost>> {
  const requestBody = await request.json();

  console.log(requestBody);

  return NextResponse.json({
    code: 'Not implemented to run code yet',
  });
}
