export async function analyzeVideo(jobId) {
  return {
    jobId,
    detectedMoments: [
      { label: 'Momento engraçado', score: 92, timestamp: '00:00:14' },
      { label: 'Grito e volume alto', score: 88, timestamp: '00:00:41' },
      { label: 'Tensão', score: 84, timestamp: '00:01:02' },
      { label: 'Muitas falas', score: 79, timestamp: '00:01:18' },
    ],
    relevanceScore: 94,
    title: 'O momento que virou o clipe mais viral da live',
    hashtags: ['#viral', '#live', '#shorts'],
    description: 'Corte automático com destaque para tensão, volume e reação emocional.',
  };
}

export function buildClipDraft(analysis) {
  return {
    duration: 45,
    orientation: '9:16',
    captions: true,
    autoZoom: true,
    progressBar: true,
    title: analysis.title,
    relevanceScore: analysis.relevanceScore,
  };
}
