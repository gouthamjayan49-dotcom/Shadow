
import {Menu,X,Search,Phone,Video,MoreVertical,Send,Paperclip,SquarePen} from 'lucide-react';
import {useState,useEffect} from 'react'
import Sidebar from './components/Sidebar';//new line
import Header from './components/Header';
import Chatarea from './components/Chatarea';
import Navigationrail from './components/Navigationrail';





const App = ()=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(true)
  const[theme, setTheme] = useState('dark')
  useEffect(()=>{
  document.documentElement.setAttribute('data-theme', theme)
}, [theme])



const[view,setView]=useState('chat')
const [sidebarView, setSidebarView] = useState('list')






  return(
    <div className='flex h-screen w-screen text-white bg-slate-950 overflow-hidden'>
      <Navigationrail />

      
      <Sidebar isSidebarOpen={isSidebarOpen}
      sidebarView={sidebarView} 
      setSidebarView={setSidebarView} />
      <main className='flex-1 flex flex-col relative'>
        <Header view={view} 
        setView={setView}
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} />
        <Chatarea view={view} setView={setView} />
      </main>

    </div>

  )
  
}
    export default App