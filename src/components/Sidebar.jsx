import React,{useState} from 'react';
import {SquarePen,ArrowLeft,Search,UserPlus,User,Check,ChevronDown,Phone} from 'lucide-react';
import Chatlistitem from './Chatlistitem';
import Contactslist from './Contactslist';
import NewContact from './NewContact';

const Sidebar = ({isSidebarOpen,sidebarView, setSidebarView,contacts,activeContact,onSelectContact,onAddContact})=>{
    return(
        <aside
       className={`border-r transition-all duration-300 overflow-hidden flex flex-col
      ${isSidebarOpen ? 'w-100' : 'w-0'}`}
      style={{backgroundColor:'var(--bg-sidebar)', borderColor:'var(--border-ui)'}}
      >
        {sidebarView ==='list' && (
          <>
        <header className='h-16 border-b flex flex-row px-6 items-center justify-between text-[#2D1F1A]'
        style={{borderColor:'var(--border-ui)', color:'var(--text-primary)'}}>
          <h1 className='text-3xl '>cipher</h1>
          <button onClick={()=>setSidebarView('NewChat')} 
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
            {contacts.map(contact=>(
              <Chatlistitem
              key={contact.id}
              contact={contact}
              isActive={activeContact?.id=== contact.id}
              onClick={()=>onSelectContact(contact)} />
            ))}
            
          </div>
          </>
          )}

          {sidebarView === 'NewChat' && (
            <>
            <header className='h-45 border-b flex flex-col gap-2'
            style={{backgroundColor:'var(--bg-app)', borderColor:'var(--border-ui)'}}>
              <div className='p-3 gap-3 flex flex-row items-center'
              style={{color:'var(--text-primary)'}}>
                <button className='hover:opacity-70 p-2 rounded-full' onClick={()=>setSidebarView('list')}>
                  <ArrowLeft size={22} />
                </button>
                <h1>
                  New Chat
                </h1>
              </div>

              <div className='relative w-full flex justify-center items-center'>
                {/* The Icon (Pinned to the left) */}
                  <Search 
                    className='absolute left-7'
                    style={{color:'var(--text-secondary)'}}
                    size={18} 
                  />
  
                {/* The Input Field */}
              <input 
              type="text"
              placeholder="Search name or number..."
              className='w-90 rounded-lg py-2 pl-10 pr-4
                outline-none border border-transparent focus:border-blue-600/50 transition-all text-sm'
                style={{backgroundColor:'var(--bg-item-hover)', color:'var(--text-primary)'}}
              />
            </div>

            <div className='p-3 hover:opacity-70'>
              <button className='flex gap-3 p-2'
              style={{color:'var(--text-primary)'}}
              onClick={()=>{setSidebarView('NewContact')}}>
              <UserPlus size={22} />
              <h1>New Contact</h1>
              </button>
              

            </div>
            </header>
            <div className='flex flex-col flex-1 overflow-hidden w-full h-full overflow-y-auto
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full'
            style={{
            scrollbarColor: 'var(--scrollbar) transparent'
            }}>
            
            {contacts.map(contact => (
        <Contactslist
        key={contact.id}
        contact={contact}
        onClick={() => {
            onSelectContact(contact);
            setSidebarView('list');
        }}
    />
))}

            </div>
            </>

          )}
      {sidebarView === 'NewContact' && (
      <>
      <header className='h-16 border-b flex flex-row px-6 items-center gap-4 shrink-0'
        style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-ui)' }}>
            <button className='hover:opacity-70 p-2 rounded-full transition-colors'
            onClick={() => setSidebarView('NewChat')}>
                <ArrowLeft size={22} style={{ color: 'var(--text-primary)' }} />
            </button>
            <h1 className='text-lg font-semibold' style={{ color: 'var(--text-primary)' }}>
                New Contact
            </h1>
        </header>
        <NewContact onAddContact={onAddContact} contacts={contacts} />
      </>
)}
      </aside>
    );
};
export default Sidebar;