import Link from 'next/link';
import { ArrowRight, Sparkles, PlayCircle, BarChart3, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Cortes gerados hoje', value: '1.240+' },
  { label: 'Tempo economizado', value: '12h' },
  { label: 'Precisão de destaque', value: '94%' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_35%)]">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-16 lg:px-8">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <div className="rounded-full bg-brand-600/20 p-2 text-brand-500">
              <Sparkles size={18} />
            </div>
            ClipForge AI
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link href="/auth" className="rounded-full border border-white/10 px-4 py-2 hover:bg-white/10">Entrar</Link>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-sm text-brand-200">
              <Sparkles size={16} /> IA para transformar lives em clipes virais
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Transforme suas lives em cortes automáticos, verticais e prontos para redes sociais.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Analise áudio, vídeo e linguagem com IA para encontrar os melhores momentos, gerar títulos e entregar clipes com legendas e verticalização em segundos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white transition hover:bg-brand-500">
                Começar agora <ArrowRight size={18} />
              </Link>
              <Link href="/library/clips" className="rounded-full border border-white/10 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/10">
                Ver exemplos
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-brand-950/80 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                  <PlayCircle size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Processamento ativo</p>
                  <p className="font-medium text-white">Live detectada • 4 cortes sugeridos</p>
                </div>
              </div>
              <div className="space-y-4">
                {['Momento de tensão', 'Grito inesperado', 'Discussão intensa'].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-medium text-white">{item}</p>
                      <span className="text-sm text-brand-300">{90 - index * 8}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" style={{ width: `${90 - index * 8}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
