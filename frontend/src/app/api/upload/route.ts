import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { source, url } = body;

  return NextResponse.json({
    ok: true,
    message: 'Upload recebido com sucesso.',
    jobId: `job-${Date.now()}`,
    source,
    url: url || null,
  });
}
