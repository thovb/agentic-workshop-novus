import { type ReactNode, useEffect, useState } from 'react';

type MarkdownCodeBlockProps = {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

export default function MarkdownCodeBlock({ inline, className, children }: MarkdownCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, '');
  const language = className?.replace('language-', '') || '';

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  if (inline) {
    return (
      <code
        className="rounded-md bg-slate-100 px-1 py-0.5 text-sm"
        style={{ color: '#0f172a' }}
      >
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800/10 bg-slate-950 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-800/30 bg-slate-900/95 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-300">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span>{language || 'code'}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-100 transition hover:bg-slate-700"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto rounded-b-3xl bg-slate-950 px-10 py-6">
        <pre className="m-0 text-sm leading-6 text-slate-50" style={{ whiteSpace: 'pre', wordBreak: 'normal', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <code
            className="text-slate-100"
            style={{ color: '#f8fafc', backgroundColor: 'transparent', whiteSpace: 'pre', wordBreak: 'normal', display: 'block' }}
          >
            {codeString}
          </code>
        </pre>
      </div>
    </div>
  );
}
