
import {Menu,X,Search,Phone,Video,MoreVertical,Send,Paperclip,SquarePen} from 'lucide-react';
import {useState} from 'react'
import Sidebar from './components/Sidebar';//new line
import Header from './components/Header';
import Chatarea from './components/Chatarea';
import Navigationrail from './components/Navigationrail';
import Messagebubble from './components/Messagebubble';
const App = ()=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(true)
  return(
    <div className='flex h-screen w-screen text-white bg-slate-950 overflow-hidden'>
      <Navigationrail />

      
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className='flex-1 flex flex-col relative'>
        <Header isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} />
        <Chatarea />
      </main>

    </div>

  )
  
}
export default App