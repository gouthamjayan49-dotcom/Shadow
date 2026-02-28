import React from 'react';
import { User, Trash2, BanIcon } from 'lucide-react';

const Contactprofile = () => {
    return (
        <div className='flex-1 flex flex-col h-full overflow-y-auto'
        style={{ backgroundColor: 'var(--bg-app)' }}>

            {/* Avatar + Name + Number */}
            <div className='flex flex-col items-center py-10 gap-2'>
                <div className='w-32 h-32 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity mb-2'
                style={{ backgroundColor: 'var(--bg-item-active)' }}>
                    <User size={64} style={{ color: 'var(--text-secondary)' }} />
                </div>
                <h1 className='text-2xl font-semibold' style={{ color: 'var(--text-primary)' }}>
                    Contact Name
                </h1>
                <p className='text-sm' style={{ color: 'var(--text-secondary)' }}>
                    +91 98765 43210
                </p>
            </div>

            {/* About Section */}
            <div className='px-10 mt-25 flex flex-col gap-1'>
                <p className='text-xs font-medium pb-2' style={{ color: 'var(--text-secondary)' }}>About</p>
                <p className='text-sm' style={{ color: 'var(--text-primary)' }}>
                    Hey there! I am using cipher.
                </p>
            </div>

            {/* Block Contact */}
            <div className='px-6 mt-8'>
                <button className='w-full flex items-center gap-3 p-4 rounded-2xl transition-opacity hover:opacity-70'
                style={{ backgroundColor: 'var(--bg-app)', color: '#FF3B30' }}>
                    <BanIcon size={18} />
                    <span className='text-sm font-medium'>Block Contact</span>
                </button>
            </div>

            {/* Delete Chat */}
            <div className='px-6 mt-2'>
                <button className='w-full flex items-center gap-3 p-4 rounded-2xl transition-opacity hover:opacity-70'
                style={{ backgroundColor: 'var(--bg-app)', color: '#FF3B30' }}>
                    <Trash2 size={18} />
                    <span className='text-sm font-medium'>Delete Chat</span>
                </button>
            </div>

        </div>
    );
};

export default Contactprofile;