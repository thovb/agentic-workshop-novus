import type { ComponentType } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import setupContent from '../../agentic_workshop_setup.md?raw';
import MarkdownCodeBlock from '../components/MarkdownCodeBlock';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function Heading2(props: React.ComponentPropsWithoutRef<'h2'>) {
  const { children, ...rest } = props;
  const text = String(children);
  const id = slugify(text);
  return (
    <h2 id={id} className="scroll-mt-32" style={{ scrollMarginTop: '8rem' }} {...rest}>
      {children}
    </h2>
  );
}

function Heading3(props: React.ComponentPropsWithoutRef<'h3'>) {
  const { children, ...rest } = props;
  const text = String(children);
  const id = slugify(text);
  return (
    <h3 id={id} className="scroll-mt-32" style={{ scrollMarginTop: '8rem' }} {...rest}>
      {children}
    </h3>
  );
}

const sections = [
  { id: 'prerequisite', label: 'Prerequisite' },
  { id: 'install-git-on-your-machine', label: 'Install Git' },
  { id: 'install-github-cli-recommended-for-agent-to-interact-with-github', label: 'GitHub CLI' },
  { id: 'install-spec-kit', label: 'Install Spec Kit' },
  { id: 'initialize-spec-kit-for-your-main-ai-coding-assistant', label: 'Initialize Spec Kit' },
  { id: 'verify-everything-works', label: 'Verify Setup' },
];

export default function PrerequisitePage() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-glow backdrop-blur-sm sm:p-12">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-600">Prerequisite</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Workshop setup guide</h2>
        <p className="mt-4 text-slate-600">
          Follow these setup steps to install the required tools and prepare the environment for the workshop.
        </p>
      </div>

      <nav className="sticky top-6 z-10 rounded-3xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm backdrop-blur-sm sm:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Jump to section</p>
        <div className="flex flex-wrap gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="grid gap-4 lg:grid-cols-2">
        {[
          {
            title: 'Install developer tools',
            description:
              'Get an IDE, Git, and your AI coding assistant ready before you begin the workshop.',
          },
          {
            title: 'Set up GitHub CLI',
            description:
              'Install and authenticate gh so the workshop can connect to GitHub smoothly.',
          },
          {
            title: 'Install Spec Kit',
            description:
              'Install uv and specify, then initialize Spec Kit for your chosen AI assistant.',
          },
          {
            title: 'Verify the setup',
            description:
              'Run the required version checks and confirm that Git, uv, and specify are working.',
          },
        ].map((step) => (
          <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-a:text-indigo-600 prose-code:rounded-md prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-pre:text-slate-50 prose-pre:p-0 prose-pre:rounded-3xl prose-blockquote:border-slate-200 prose-blockquote:bg-slate-50">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code: MarkdownCodeBlock as ComponentType<any>, h2: Heading2, h3: Heading3 }}
        >
          {setupContent}
        </ReactMarkdown>
      </article>
    </section>
  );
}
