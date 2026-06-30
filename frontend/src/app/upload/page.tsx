import { ArrowUpFromLine, Link2, Sparkles } from 'lucide-react';

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Nova análise</p>
              <h1 className="text-3xl font-semibold text-white">Envie um vídeo ou use uma URL compatível</h1>
            </div>
            <div className="rounded-full border border-brand-500/20 bg-brand-600/10 px-4 py-2 text-sm text-brand-200">IA pronta</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="rounded-3xl border border-dashed border-brand-500/30 bg-brand-950/70 p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600/20 text-brand-300">
                <ArrowUpFromLine size={24} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">Arraste e solte seu vídeo aqui</h2>
              <p className="mt-2 text-sm text-slate-400">MP4, MOV, AVI • até 2 GB</p>
              <button className="mt-6 rounded-full bg-brand-600 px-4 py-2 font-medium text-white">Escolher arquivo</button>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-brand-950/60 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                <Link2 size={16} /> Informar URL compatível
              </div>
              <input className="w-full rounded-2xl border border-white/10 bg-brand-950/70 px-4 py-3 outline-none" placeholder="https://youtube.com/watch?..." />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-cyan-500/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-brand-600/20 p-2 text-brand-300"><Sparkles size={18} /></div>
              <h2 className="text-xl font-semibold text-white">Processo automático</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Transcrição com Whisper.</li>
              <li>• Detecção de momentos engraçados, tensão e variações de volume.</li>
              <li>• Geração de títulos, hashtags e descrição para redes sociais.</li>
              <li>• Conversão para vertical 9:16 com legendas automáticas.</li>
            </ul>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-4">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Processamento</span>
                <span>68%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
