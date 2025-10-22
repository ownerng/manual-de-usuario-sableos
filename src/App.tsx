import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { DOC_PAGES, TOOLS } from './constants/content';
import type { DocPage, Tool } from './types';

const App: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<string>('introduction');

  const allItems: (DocPage | Tool)[] = [...DOC_PAGES, ...TOOLS];
  const selectedItem = allItems.find(item => item.id === selectedItemId) || DOC_PAGES[0];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar
        docPages={DOC_PAGES}
        tools={TOOLS}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
      />
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <Content item={selectedItem} />
      </main>
    </div>
  );
};

export default App;
