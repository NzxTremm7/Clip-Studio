import { Router } from 'express';
import { analyzeVideo, buildClipDraft } from '../services/aiService.js';

const router = Router();

router.post('/:jobId', async (req, res) => {
  const { jobId } = req.params;

  try {
    const analysis = await analyzeVideo(jobId);
    const clipDraft = buildClipDraft(analysis);

    res.json({
      ok: true,
      jobId,
      analysis,
      clipDraft,
    });
  } catch (error) {
    res.status(500).json({ message: 'Falha ao processar vídeo', error: error.message });
  }
});

export default router;
