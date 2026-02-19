import React from 'react';
import { Check, CheckCheck, User, Bot, Trash2 } from 'lucide-react';

const Messagebubble=()=>{
    return(
        <>
        
        <div className='w-full flex justify-end'>
            <div className='max-w-[70%] bg-[#3D5A6E] p-3 text-[#2D1F1A] rounded-2xl
             rounded-tr-none shadow-md'>
                <p className='text-sm break-words'>
                    This bubble will grow with my text, but it will stop 
                    and wrap to a new line once it hits 80% of the screen width.
                </p>
            <div className='text-[10px] text-indigo-200 text-right mt-1 items-center justify-end gap-1 flex'>
                <span>11:11 AM</span>
                <Check size={12} />

            </div>

            </div>

        </div> 
        
        <div className='w-full flex justify-start'>
            <div className='max-w-[70%] bg-[#EDD9C8] p-3 text-[#2D1F1A] rounded-2xl
            rounded-tl-none shadow-md'>
                <p className='text-sm break-words'>
                    This is the recipient message section and it is a neutral colour...Both user and recipient messages 
                    are hyper secure in shadow message
                </p>
                <div className='text-[10px] text-right mt-1 items-center justify-end gap-1 flex'>
                    <span>11:12 AM</span>
                    <Check size={12} />
                </div>
                
            </div>

        </div>
        </>
    );
}
export default Messagebubble;