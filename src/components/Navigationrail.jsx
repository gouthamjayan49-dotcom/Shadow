import React from 'react';
import { MessageSquare,Settings,CircleUser} from 'lucide-react';
const Navigationrail=()=>{
    return(
       <aside className='flex flex-col h-screen w-16 border-r border-slate-800 bg-black justify-between overflow-hidden'>
    {/* TOP SECTION */}
    <div className='flex flex-col gap-8 items-center pt-2'>
        <div className='p-3 text-blue-600 rounded-2xl cursor-pointer hover:bg-slate-800 transition-colors'>
            <MessageSquare size={24} />
        </div>
    </div>

    {/* BOTTOM SECTION */}
    <div className='flex flex-col gap-6 items-center pb-6'>
        <div className='p-3 text-blue-500 hover:text-white cursor-pointer transition-colors'>
            <Settings size={24} />
        </div>
        <div className='text-slate-600 hover:text-red-500 cursor-pointer transition-colors'>
            <CircleUser size={24} />
        </div>
    </div>
</aside>
    );
};
export default Navigationrail;