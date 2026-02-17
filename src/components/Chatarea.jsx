import React from 'react';
import Messagebubble from './Messagebubble';
import { Send, Smile, Paperclip } from 'lucide-react';

const Chatarea = () => {
    return (
        <div className='flex-1 flex flex-col bg-slate-950 h-full overflow-hidden'>
            <div className='flex-1 overflow-y-auto p-6 space-y-4 flex flex-col
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-slate-700
            [&::-webkit-scrollbar-thumb]:rounded-full'
            >
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                    
            </div>

            <div className='p-4 bg-slate-900/50 border-t border-slate-800'>
                <div className='flex items-center gap-3 bg-slate-800/50 rounded-2xl px-4 py-3 border border-slate-700/50'>
                    <Smile size={22} className='text-slate-400' />
                    <input 
                        type="text" 
                        placeholder="Message..." 
                        className='bg-transparent flex-1 outline-none text-white'
                    />
                    <Send size={19} className='text-blue-500 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Chatarea;