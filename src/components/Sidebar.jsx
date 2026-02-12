import React from 'react';
import {SquarePen} from 'lucide-react';

const Sidebar = ({isSidebarOpen})=>{
    return(
        <aside
       className={`bg-slate-900 border-r border-slate-800 transition-all duration-300 overflow-hidden flex flex-col
      ${isSidebarOpen ? 'w-100' : 'w-0'}`}
      >
        <header className='h-16 border-b flex flex-row px-6 border-slate-800 items-center justify-between'>
          <h1 className='text-3xl '>SHADOW</h1>
          <button className='p-2 hover:bg-slate-800 rounded-lg transition-colors hover:text-white'>
            <SquarePen size={20} />
          </button>
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
              {/* The div to include both the unread messages count and final message time */}
              <div className='flex flex-col items-center leading-tight text-xs truncate gap-2'>
                <p>12:34 pm</p>
                <div className='bg-emerald-500 text-slate-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center'>
                      22
                </div>
              </div>
            </div>
          </div>
      </aside>
    );
};
export default Sidebar;