export default function HomePage() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-glow backdrop-blur-sm sm:p-12">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-600">Overview</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          agentic-workshop-novus
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          This workspace is designed to help you run an agentic workshop with Spec Kit and a simple React + Tailwind website.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Prerequisite page</h2>
          <p className="mt-3 text-slate-600">
            Install your developer tools, Git, GitHub CLI, and Spec Kit before running the workshop environment.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Prompts section</h2>
          <p className="mt-3 text-slate-600">
            Store and review the prompts you use with Spec Kit for your agentic workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
