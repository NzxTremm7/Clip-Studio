export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h1 className="text-3xl font-semibold text-white">Perfil do usuário</h1>
        <p className="mt-2 text-sm text-slate-400">Veja suas informações, uso da plataforma e histórico de processamento.</p>
        <div className="mt-8 rounded-3xl border border-white/10 bg-brand-950/60 p-6">
          <p className="text-sm text-slate-400">Nome</p>
          <p className="mt-1 text-xl font-semibold text-white">Ana Oliveira</p>
          <p className="mt-4 text-sm text-slate-400">E-mail</p>
          <p className="mt-1 text-lg text-slate-200">ana@clipforge.ai</p>
        </div>
      </div>
    </main>
  );
}
