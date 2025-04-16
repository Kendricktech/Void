import React, { useState } from "react";
import Terminal from "./components/terminal";
import WhatsAppGUI from "./components/WhatsAppGUI";

function App() {
  const [activeTab, setActiveTab] = useState("terminal");
  const { terminalComponent, executeCommand } = Terminal();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/10 text-green-400 font-mono px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-[40px] md:text-[50px] font-bold text-green-400 backdrop-blur-sm bg-black/30 border border-white/10 px-6 py-2 rounded-2xl shadow-md shadow-green-500/20">
          WELCOME TO THE VOID
        </h1>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-4 space-x-2">
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'terminal' ? 'bg-black/30 text-green-400' : 'bg-black/10 text-green-600'}`}
          onClick={() => setActiveTab('terminal')}
        >
          Terminal
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'whatsapp' ? 'bg-black/30 text-green-400' : 'bg-black/10 text-green-600'}`}
          onClick={() => setActiveTab('whatsapp')}
        >
          WhatsApp
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="w-full max-w-3xl">
        {activeTab === 'terminal' ? (
          terminalComponent
        ) : (
          <WhatsAppGUI sendTerminalCommand={executeCommand} />
        )}
      </div>
      
      {/* Always visible small terminal */}
      {activeTab === 'whatsapp' && (
        <div className="w-full max-w-3xl mt-6 h-24 overflow-y-auto bg-black/40 border border-white/10 rounded-lg p-2 text-sm">
          <div className="font-bold text-green-500 mb-1">Terminal Output:</div>
          {/* You could show the last few lines of terminal output here */}
          <div className="text-green-400 opacity-70">(Terminal commands will be executed here)</div>
        </div>
      )}
    </div>
  );
}

export default App;