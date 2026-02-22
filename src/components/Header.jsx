import React from 'react';
import { Menu, X ,Pen,ArrowLeft} from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen, selectedProfile,setSelectedProfile }) => {
    
    return (
        
        <header className='h-16 border-b flex flex-row items-center px-6 gap-4 cursor-pointer'
        style={{backgroundColor:'var(--bg-app)', borderColor:'var(--border-ui)'}} onClick={()=>{setSelectedProfile(true)}}>
            {selectedProfile === false &&(
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

            {selectedProfile === true &&(
                <>
                 <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProfile(false);
                }}
                className='p-2 hover:opacity-70 rounded-lg transition-colors'
                style={{color:'var(--text-primary)'}}>
                    <ArrowLeft size={22} />


                </button>
                <h1 className="font-medium text-lg" style={{color:'var(--text-primary)'}}>Contact info</h1>
                <button className='p-2 hover:opacity-70 rounded-lg transition-colors ml-auto'
                onClick={()=>{}}>
                    <Pen size={20} />

                </button>

                </>
            )}
        </header>
    );
};

export default Header;