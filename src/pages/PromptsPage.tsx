import type { ComponentType } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import promptsContent from '../content/prompts.md?raw';
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
  { id: 'spec-kit-prompts', label: 'Prompt Library' },
  { id: 'general-workshop-prompt', label: 'General Prompt' },
  { id: 'spec-kit-initialization-prompt', label: 'Initialize Spec Kit' },
  { id: 'prompt-template-for-task-generation', label: 'Task Prompt' },
  { id: 'notes', label: 'Notes' },
];

export default function PromptsPage() {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-glow backdrop-blur-sm sm:p-12">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-600">Prompts</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Speckit prompt library</h2>
        <p className="mt-4 text-slate-600">
          Review and refine the prompts you use with Spec Kit to drive the agentic workshop workflow.
        </p>
      </div>

      <nav className="sticky top-6 z-10 rounded-3xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm backdrop-blur-sm sm:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Jump to prompt</p>
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

      <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-a:text-indigo-600 prose-code:rounded-md prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-pre:text-slate-50 prose-pre:p-0 prose-pre:rounded-3xl prose-blockquote:border-slate-200 prose-blockquote:bg-slate-50">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code: MarkdownCodeBlock as ComponentType<any>, h2: Heading2, h3: Heading3 }}
        >
          {promptsContent}
        </ReactMarkdown>
      </article>
    </section>
  );
}
