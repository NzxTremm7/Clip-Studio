import { NextResponse } from 'next/server';

export async function POST(_req: Request, { params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;

  return NextResponse.json({
    ok: true,
    jobId,
    analysis: {
      relevanceScore: 94,
      title: 'Momento de destaque detectado',
      hashtags: ['#viral', '#live', '#shorts'],
      description: 'Corte automático com destaque para tensão e momento de impacto.',
    },
    clipDraft: {
      duration: 45,
      orientation: '9:16',
      captions: true,
      autoZoom: true,
      progressBar: true,
    },
  });
}
