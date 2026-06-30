import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { source, url } = req.body;

  if (!source) {
    return res.status(400).json({ message: 'source is required' });
  }

  res.json({
    ok: true,
    message: 'Upload recebido com sucesso.',
    jobId: `job-${Date.now()}`,
    source,
    url: url || null,
  });
});

export default router;
