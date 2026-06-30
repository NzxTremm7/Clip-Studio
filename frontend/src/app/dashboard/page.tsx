import { Activity, Clapperboard, Sparkles, Users, CreditCard, Settings, UserRound } from 'lucide-react';
import Link from 'next/link';

const menu = [
  { label: 'Dashboard', href: '/dashboard', icon: Activity },
  { label: 'Biblioteca de vídeos', href: '/library/videos', icon: Clapperboard },
  { label: 'Biblioteca de cortes', href: '/library/clips', icon: Sparkles },
  { label: 'Configurações', href: '/settings', icon: Settings },
  { label: 'Perfil', href: '/profile', icon: UserRound },
  { label: 'Assinatura', href: '/subscription', icon: CreditCard },
];

const cards = [
  { title: 'Cortes hoje', value: '24', change: '+12%' },
  { title: 'Tempo processado', value: '3h 20m', change: '+8%' },
  { title: 'Relevância média', value: '87/100', change: '+4%' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">ClipForge AI</p>
            <h1 className="text-3xl font-semibold text-white">Dashboard principal</h1>
          </div>
          <div className="rounded-full border border-brand-500/20 bg-brand-600/10 px-4 py-2 text-sm text-brand-200">
            Plano Pro • 12 cortes restantes
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="mb-5 px-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Navegação</div>
            <nav className="space-y-2">
              {menu.map((item) => (
                <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {cards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm text-slate-400">{card.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{card.value}</p>
                  <p className="mt-2 text-sm text-emerald-400">{card.change} vs. ontem</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Últimos processamentos</h2>
                  <Link href="/library/clips" className="text-sm text-brand-300">Ver tudo</Link>
                </div>
                <div className="space-y-3">
                  {['Live de produto', 'Sessão de gameplay', 'Podcast com convidados'].map((title) => (
                    <div key={title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-brand-950/60 px-4 py-3">
                      <div>
                        <p className="font-medium text-white">{title}</p>
                        <p className="text-sm text-slate-400">3 cortes • 94% relevância</p>
                      </div>
                      <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">Pronto</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-cyan-500/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">IA assistida</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Gerar novos cortes em segundos</h2>
                <p className="mt-3 text-sm text-slate-300">Envie um vídeo ou cole uma URL compatível para receber cortes verticais com legendas e destaque automático.</p>
                <Link href="/upload" className="mt-6 inline-flex rounded-full bg-white px-4 py-2 font-medium text-brand-950 transition hover:bg-slate-100">Enviar vídeo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
