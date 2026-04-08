import { useState } from 'react';
import HomePage from './pages/HomePage';
import PrerequisitePage from './pages/PrerequisitePage';
import PromptsPage from './pages/PromptsPage';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'prerequisite', label: 'Prerequisite' },
  { id: 'prompts', label: 'Prompts' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  let content;
  if (activeTab === 'prerequisite') {
    content = <PrerequisitePage />;
  } else if (activeTab === 'prompts') {
    content = <PromptsPage />;
  } else {
    content = <HomePage />;
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-glow backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Agentic Workshop</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                agentic-workshop-novus
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                A live workshop site that organizes setup steps, prompt notes, and the agentic Spec Kit workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {content}
      </div>
    </main>
  );
}

export default App;
