import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-950 px-6 py-16">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-brand-600/20 to-cyan-500/10 p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-sm text-brand-200">
            <Sparkles size={16} /> ClipForge AI
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-white">Acesse sua conta e transforme vídeos em clipes em minutos.</h1>
          <p className="mt-4 text-sm text-slate-300">Cadastre-se ou faça login para acessar o dashboard, histórico de vídeos e assinatura.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><ShieldCheck size={16} className="text-brand-300" /> Segurança com JWT e autenticação Google.</div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><ShieldCheck size={16} className="text-brand-300" /> Upload de vídeos com processamento inteligente.</div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6 flex gap-2 rounded-full border border-white/10 bg-brand-950/60 p-1">
            <div className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white">Entrar</div>
            <div className="rounded-full px-4 py-2 text-sm text-slate-400">Criar conta</div>
          </div>
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-brand-950/70 px-4 py-3 outline-none ring-0" placeholder="E-mail" />
            <input className="w-full rounded-2xl border border-white/10 bg-brand-950/70 px-4 py-3 outline-none ring-0" placeholder="Senha" type="password" />
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 font-medium text-white transition hover:bg-brand-500">
              Continuar <ArrowRight size={16} />
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-400">ou</div>
          <button className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">Entrar com Google</button>
        </div>
      </div>
    </main>
  );
}
