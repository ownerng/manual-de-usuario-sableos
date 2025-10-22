import React, { useState } from 'react';
import type { DocPage, Tool } from '../types';

interface ContentProps {
  item: DocPage | Tool;
}

const CopyIcon: React.FC<{ copied: boolean }> = ({ copied }) => (
  copied ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
);

const CodeBlock: React.FC<{ command: string }> = ({ command }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-800 rounded-lg my-4 relative">
            <pre className="p-4 text-cyan-300 text-sm overflow-x-auto">
                <code className="font-mono">{command}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Copiar comando"
            >
                <CopyIcon copied={copied} />
            </button>
        </div>
    );
};


export const Content: React.FC<ContentProps> = ({ item }) => {
  const isTool = 'category' in item;
  const { title, content } = item as DocPage;
  const { name, category, description, command, useCase } = item as Tool;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-b border-gray-700 pb-4 mb-8">
        {isTool && (
          <p className="text-sm font-semibold text-cyan-400 mb-1">{category}</p>
        )}
        <h1 className="text-3xl lg:text-4xl font-bold text-white">{isTool ? name : title}</h1>
      </div>
      
      {isTool ? (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">Descripción</h2>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
          {command && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 mb-2">Comando de Ejemplo</h2>
              <CodeBlock command={command} />
            </div>
          )}
           <div>
              <h2 className="text-2xl font-semibold text-gray-100 mb-3">Caso de Uso</h2>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-gray-300 leading-relaxed">{useCase}</p>
              </div>
          </div>
        </div>
      ) : (
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};
