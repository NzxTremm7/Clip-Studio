import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploadRoutes from './routes/upload.js';
import processingRoutes from './routes/processing.js';
import historyRoutes from './routes/history.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'ClipForge AI API' });
});

app.use('/api/upload', uploadRoutes);
app.use('/api/processing', processingRoutes);
app.use('/api/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`ClipForge API running on port ${PORT}`);
});
