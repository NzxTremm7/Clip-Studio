import Link from 'next/link';
import { Film, PlayCircle } from 'lucide-react';

const videos = [
  { title: 'Live de lançamento', status: 'Processado', date: 'Hoje' },
  { title: 'Podcast de tecnologia', status: 'Processando', date: 'Ontem' },
  { title: 'Aula de produtividade', status: 'Pronto', date: '2 dias' },
];

export default function VideosLibraryPage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Biblioteca</p>
            <h1 className="text-3xl font-semibold text-white">Biblioteca de vídeos</h1>
          </div>
          <Link href="/upload" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Enviar novo vídeo</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/20 to-cyan-500/10">
                <PlayCircle size={40} className="text-brand-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-white">{video.title}</h2>
                  <p className="text-sm text-slate-400">{video.date}</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">{video.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
