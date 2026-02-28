import React, { useState } from 'react'
import { Search, User, Check } from 'lucide-react';
import Contactslist from './Contactslist';

const NewContact = ({ onAddContact,contacts }) => {

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [isSelected,setIsSelected]=useState(false);

  const handleSave = () => {
    if (!username.trim()) {
      alert('Please enter a username!');
      return;
    }
    onAddContact({
      name: nickname.trim() || username.trim(),
    });
    setUsername('');
    setNickname('');
  };

  const suggestions=contacts.filter(c=>
    c.name.toLowerCase().includes(username.toLowerCase())
  );

  return (
    <div className='flex flex-col h-full' style={{ backgroundColor: 'var(--bg-app)' }}>
    

        {/* Avatar Placeholder */}
        <div className="flex justify-center py-4">
          <div className="p-8 rounded-full" style={{ backgroundColor: 'var(--bg-item-hover)' }}>
            <User size={48} style={{ color: 'var(--text-secondary)' }} />
          </div>
        </div>

        {/* Username Search Bar */}
        <div className="flex flex-col gap-2 px-5">
          <p className='text-xs font-medium' style={{ color: 'var(--text-secondary)' }}>
            Search by username
          </p>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ backgroundColor: 'var(--bg-item-hover)' }}>
            <Search size={18} style={{ color: 'var(--text-secondary)' }} />
            <input
              type="text"
              placeholder="@username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="outline-none bg-transparent w-full text-sm"
              style={{ color: 'var(--text-primary)' }}
            />
      
        </div>
      </div>

        <div className='overflow-y-auto flex-1 
        [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full'
            style={{
            scrollbarColor: 'var(--scrollbar) transparent'
            }}>

          {suggestions.map(c => (
          <Contactslist
          key={c.id}
          contact={c}
          onClick={() => {
        setUsername(c.name);
        setIsSelected(true);
      }}
    />
  ))}

        </div>

      

        

      
    </div>
  );
}

export default NewContact;