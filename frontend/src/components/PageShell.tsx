import { Sidebar } from './Sidebar';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-950 p-6 text-slate-100 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:grid lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
