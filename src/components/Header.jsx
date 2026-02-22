import React from 'react';
import { Menu, X ,Pen,ArrowLeft} from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen,view,setView}) => {
    
    return (
        
        <header className='h-16 border-b flex flex-row items-center px-6 gap-4 cursor-pointer'
        style={{backgroundColor:'var(--bg-app)', borderColor:'var(--border-ui)'}} onClick={()=>{setView('profile')}}>
            {view === 'chat' &&(
                <>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setIsSidebarOpen(!isSidebarOpen);}}
                className='p-2 hover:opacity-70 rounded-lg transition-colors'
                style={{color:'var(--text-primary)'}}
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="font-medium text-lg" style={{color:'var(--text-primary)'}}>Shadow Chat</h1>
            </>
            )}

            {view === 'profile' &&(
                <>
                 <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setView('chat');
                }}
                className='p-2 hover:opacity-70 rounded-lg transition-colors'
                style={{color:'var(--text-primary)'}}>
                    <ArrowLeft size={22} />


                </button>
                <h1 className="font-medium text-lg" style={{color:'var(--text-primary)'}}>Contact info</h1>
                <button className='p-2 hover:opacity-70 rounded-lg transition-colors ml-auto'
                onClick={(e)=>{
                    e.stopPropagation();
                    setView('edit')
                }}>
                    <Pen size={20} />

                </button>

                </>
            )}
             {view === 'edit' && (
                <>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setView('profile');
                        }}
                        className='p-2 hover:opacity-70 rounded-lg transition-colors'
                        style={{color:'var(--text-primary)'}}>
                        <ArrowLeft size={22} />
                    </button>
                    <h1 className="font-medium text-lg" style={{color:'var(--text-primary)'}}>Edit Contact</h1>
                </>
            )}
        </header>
    );
};

export default Header;