import React from 'react';
import type { DocPage, Tool } from '../types';
import { ToolCategory } from '../types';

interface SidebarProps {
  docPages: DocPage[];
  tools: Tool[];
  selectedItemId: string;
  setSelectedItemId: (id: string) => void;
}

const NavLink: React.FC<{ id: string, title: string, selectedItemId: string, onClick: (id: string) => void }> = ({ id, title, selectedItemId, onClick }) => {
  const isActive = id === selectedItemId;
  return (
    <a
      href={`#${id}`}
      onClick={(e) => { e.preventDefault(); onClick(id); }}
      className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
        isActive
          ? 'bg-cyan-600/80 text-white font-semibold'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {title}
    </a>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ docPages, tools, selectedItemId, setSelectedItemId }) => {
    const groupedTools = tools.reduce((acc, tool) => {
        (acc[tool.category] = acc[tool.category] || []).push(tool);
        return acc;
    }, {} as Record<ToolCategory, Tool[]>);

    const categoryOrder = Object.values(ToolCategory);

  return (
    <aside className="w-64 lg:w-72 bg-gray-800 p-4 flex-shrink-0 overflow-y-auto">
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h1 className="text-xl font-bold text-white">SableOS Docs</h1>
      </div>
      <nav className="space-y-4">
        <div>
            <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Manual de Usuario</h2>
            {docPages.map(page => (
                <NavLink key={page.id} id={page.id} title={page.title} selectedItemId={selectedItemId} onClick={setSelectedItemId} />
            ))}
        </div>
        <div>
          <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Guía de Herramientas</h2>
          {categoryOrder.map(category => (
            groupedTools[category] && (
              <div key={category} className="mb-3">
                <h3 className="px-4 text-xs font-medium text-gray-500 mb-1">{category}</h3>
                {groupedTools[category].sort((a,b) => a.name.localeCompare(b.name)).map(tool => (
                   <NavLink key={tool.id} id={tool.id} title={tool.name} selectedItemId={selectedItemId} onClick={setSelectedItemId} />
                ))}
              </div>
            )
          ))}
        </div>
      </nav>
    </aside>
  );
};
