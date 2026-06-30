export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h1 className="text-3xl font-semibold text-white">Configurações</h1>
        <p className="mt-2 text-sm text-slate-400">Gerencie preferências de processamento, idioma e integração com IA.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-950/60 p-4">
            <h2 className="font-semibold text-white">Processamento</h2>
            <p className="mt-2 text-sm text-slate-400">Duração padrão dos cortes: 45s</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-brand-950/60 p-4">
            <h2 className="font-semibold text-white">Idioma</h2>
            <p className="mt-2 text-sm text-slate-400">Português, Inglês e Espanhol</p>
          </div>
        </div>
      </div>
    </main>
  );
}
