
import {Menu,X,Search,Phone,Video,MoreVertical,Send,Paperclip,SquarePen} from 'lucide-react';
import {useState} from 'react'
import Sidebar from './components/Sidebar';//new line
const App = ()=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(true)
  return(
    <div className='flex h-screen w-screen text-white bg-slate-950 overflow-hidden'>
      <aside className='border-r overflow-hidden w-20 flex flex-col h-screen border-slate-800'>
        

      </aside>

      
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className='flex-1 flex flex-col bg-slate-950 relative'>
        <header className='h-16 border-b border-slate-800 flex flex-row items-center px-6 bg-slate-900/50 backdrop-blur-md gap-4'>
          
            <button onClick={()=> setIsSidebarOpen(!isSidebarOpen)}
              className='p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white'>
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1>ContactName</h1>
          
        </header>
      </main>

    </div>

  )
  
}
export default App