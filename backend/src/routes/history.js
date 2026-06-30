import { Router } from 'express';

const router = Router();

const history = [
  { id: 'clip-1', title: 'Momento de tensão', relevance: 96, status: 'Pronto' },
  { id: 'clip-2', title: 'Grito inesperado', relevance: 91, status: 'Processando' },
  { id: 'clip-3', title: 'Discussão intensa', relevance: 88, status: 'Pronto' },
];

router.get('/', (_req, res) => {
  res.json({ ok: true, items: history });
});

export default router;
