import React,{useState} from 'react';
import {SquarePen,ArrowLeft,Search,UserPlus,Check,ChevronDown} from 'lucide-react';
import Chatlistitem from './Chatlistitem';

const Sidebar = ({isSidebarOpen})=>{
  //conditional rendering code
  const[view,setView]=useState('NewChat');
    return(
        <aside
       className={`border-r transition-all duration-300 overflow-hidden flex flex-col
      ${isSidebarOpen ? 'w-100' : 'w-0'}`}
      style={{backgroundColor:'var(--bg-sidebar)', borderColor:'var(--border-ui)'}}
      >
        {view ==='list' && (
          <>
        <header className='h-16 border-b flex flex-row px-6 items-center justify-between text-[#2D1F1A]'
        style={{borderColor:'var(--border-ui)', color:'var(--text-primary)'}}>
          <h1 className='text-3xl '>SHADOW</h1>
          <button onClick={()=>setView('NewChat')} 
          className='p-2 rounded-lg transition-colors hover:opacity-70'>
            <SquarePen size={20} />
          </button>
        </header>
          <div className='flex flex-col flex-1 overflow-hidden w-full h-full overflow-y-auto
            [&::-webkit-scrollbar]:w-1.5
[&::-webkit-scrollbar-track]:bg-transparent
[&::-webkit-scrollbar-thumb]:rounded-full'
style={{
   scrollbarColor: 'var(--scrollbar) transparent'
}}>
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
          </div>
          </>
          )}

          {view === 'NewChat' && (
            <>
            <header className='h-45 border-b border-slate-800 bg-slate-900 flex flex-col gap-2'>
              <div className='p-3 gap-3 flex flex-row items-center'>
                <button className='hover:bg-slate-800 p-2 rounded-full' onClick={()=>setView('list')}>
                  <ArrowLeft size={22} />
                </button>
                <h1>
                  New Chat
                </h1>
              </div>

              <div className='relative w-full flex justify-center items-center'>
                {/* The Icon (Pinned to the left) */}
                  <Search 
                    className='absolute left-7 text-slate-500'
                    size={18} 
                  />
  
                {/* The Input Field */}
              <input 
              type="text"
              placeholder="Search name or number..."
              className='w-90 bg-slate-800 text-slate-200 rounded-lg py-2 pl-10 pr-4
                outline-none border border-transparent focus:border-blue-600/50 transition-all text-sm'
              />
            </div>
            <div className='p-3 hover:bg-slate-800'>
              <button className='flex gap-3 p-2'>
              <UserPlus size={22} />
              <h1>New Contact</h1>
              </button>
              

            </div>
            </header>
            
            <div className='flex flex-col flex-1 overflow-hidden w-full h-full overflow-y-auto'>
            <div className='flex flex-row items-center p-4 border-b h-16 border-slate-800'>
              {/* Profile icon div */}
              <div className='w-12 h-12 rounded-full bg-slate-700 shrink-0'>
                
      
              </div>

              {/*The div holding two divs for the Name and the last message */}
      
              
              <div className='flex flex-col flex-1 ml-4 gap-2'>
                {/* The div for holding the contact name */}
                <div className='leading-tight truncate'>
                  <h1>Contact Name</h1>
                </div>
                {/* The div for holding the last chat */}
                <div className='leading-tight truncate'>
                  <p className='text-xs'>This is the last message</p>
                </div>

              </div>
            </div>
          </div>


            
            </>

          )}
      </aside>
    );
};
export default Sidebar;