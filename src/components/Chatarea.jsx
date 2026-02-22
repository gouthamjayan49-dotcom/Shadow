import React from 'react';
import Messagebubble from './Messagebubble';
import Contactprofile from './Contactprofile';
import { Send, Smile, Paperclip } from 'lucide-react';

const Chatarea = ({selectedProfile}) => {
    return (
        <>
        {selectedProfile === false &&(
        <div className='flex-1 flex flex-col h-full overflow-hidden'
        style={{backgroundColor:'var(--bg-app)'}}>

            <div className='flex-1 overflow-y-auto p-6 space-y-4 flex flex-col
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full'
            style={{scrollbarColor:'var(--scrollbar) transparent'}}
            >
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                <Messagebubble />
                    
            </div>

            <div className='p-4'
            style={{backgroundColor:'var(--bg-app)'}}>
                <div className='flex items-center gap-3 rounded-2xl px-4 py-3 border'
                style={{
                    backgroundColor:'var(--bg-item-hover)',
                    borderColor:'var(--border-ui)'
                }}>
                    <Smile size={22} style={{color:'var(--text-secondary)'}} />
                    <input 
                        type="text" 
                        placeholder="Message..." 
                        className='bg-transparent flex-1 outline-none'
                        style={{color:'var(--text-primary)'}}
                    />
                    <Send size={19} className='cursor-pointer'
                    style={{color:'var(--text-primary)'}} />
                </div>
            </div>
        </div>
        )}

        {selectedProfile ===true &&(
            <Contactprofile selectedProfile={selectedProfile} />
        )}
        </>
    );
};

export default Chatarea;