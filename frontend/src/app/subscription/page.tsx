const plans = [
  { name: 'Gratuito', price: 'R$0', description: 'Até 5 cortes por dia', perks: ['1 projeto por vez', 'Legenda automática', 'Suporte básico'] },
  { name: 'Pro', price: 'R$49/mês', description: 'Cortes ilimitados', perks: ['Cortes ilimitados', 'Renderização rápida', 'Hashtags automáticas'] },
  { name: 'Premium', price: 'R$99/mês', description: 'Processamento prioritário', perks: ['Prioridade em processamento', 'Recursos avançados', 'Análises IA premium'] },
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Assinatura</p>
          <h1 className="text-3xl font-semibold text-white">Escolha o plano ideal</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              <p className="mt-5 text-4xl font-semibold text-white">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {plan.perks.map((perk) => <li key={perk}>• {perk}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-full bg-brand-600 px-4 py-2 font-medium text-white">Selecionar</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
