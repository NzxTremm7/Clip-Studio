import { Download, Sparkles } from 'lucide-react';

const clips = [
  { title: 'Momento de tensão', relevance: 96, duration: '45s', tags: ['#viral', '#tensao', '#live'] },
  { title: 'Grito inesperado', relevance: 91, duration: '30s', tags: ['#engajamento', '#momento'] },
  { title: 'Discussão intensa', relevance: 88, duration: '60s', tags: ['#shorts', '#story'] },
];

export default function ClipsLibraryPage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Biblioteca</p>
          <h1 className="text-3xl font-semibold text-white">Biblioteca de cortes</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clips.map((clip) => (
            <div key={clip.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600/20 to-cyan-500/10">
                <Sparkles size={24} className="text-brand-300" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-white">{clip.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">Relevância {clip.relevance}/100</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">{clip.duration}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {clip.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-brand-950/70 px-2 py-1 text-xs text-brand-200">{tag}</span>
                ))}
              </div>
              <button className="mt-5 flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                <Download size={16} /> Baixar corte
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
