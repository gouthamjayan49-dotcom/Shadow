
import {Menu,X,Search,Phone,Video,MoreVertical,Send,Paperclip,SquarePen} from 'lucide-react';
import {useState,useEffect} from 'react'
import Sidebar from './components/Sidebar';//new line
import Header from './components/Header';
import Chatarea from './components/Chatarea';
import Navigationrail from './components/Navigationrail';
import Messagebubble from './components/Messagebubble';




const App = ()=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(true)
  const[theme, setTheme] = useState('dark')
  useEffect(()=>{
  document.documentElement.setAttribute('data-theme', theme)
}, [theme])

const[selectedProfile,setSelectedProfile]=useState(false)








  return(
    <div className='flex h-screen w-screen text-white bg-slate-950 overflow-hidden'>
      <Navigationrail />

      
      <Sidebar isSidebarOpen={isSidebarOpen}
      setSelectedProfile={setSelectedProfile} />
      <main className='flex-1 flex flex-col relative'>
        <Header isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile} />
        <Chatarea selectedProfile={selectedProfile} />
      </main>

    </div>

  )
  
}
    export default App