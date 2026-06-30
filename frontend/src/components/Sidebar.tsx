import Link from 'next/link';
import { Activity, Clapperboard, Sparkles, Settings, UserRound, CreditCard } from 'lucide-react';

const menu = [
  { label: 'Dashboard', href: '/dashboard', icon: Activity },
  { label: 'Biblioteca de vídeos', href: '/library/videos', icon: Clapperboard },
  { label: 'Biblioteca de cortes', href: '/library/clips', icon: Sparkles },
  { label: 'Configurações', href: '/settings', icon: Settings },
  { label: 'Perfil', href: '/profile', icon: UserRound },
  { label: 'Assinatura', href: '/subscription', icon: CreditCard },
];

export function Sidebar() {
  return (
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
  );
}
