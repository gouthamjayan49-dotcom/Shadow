import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <header className='h-16 border-b border-slate-800 flex flex-row items-center px-6 bg-[#F5EDE3] gap-4'>
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className='p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white'
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-[#2D1F1A] font-medium text-lg">Shadow Chat</h1>
        </header>
    );
};

export default Header;