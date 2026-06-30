import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-950 px-6 text-slate-100">
      <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Página não encontrada</h1>
        <p className="mt-3 text-sm text-slate-400">A página que você tentou abrir não existe ou foi movida.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-600 px-4 py-2 font-medium text-white">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
