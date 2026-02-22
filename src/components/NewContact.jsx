import React from 'react'
import { ArrowLeft, User, Phone, Check } from 'lucide-react';
const NewContact = ({setView})=>{
    return(
        <div className='flex flex-col h-full' style={{ backgroundColor: 'var(--bg-app)' }}>
    {/* Header */}
    <header className='h-16 border-b flex flex-row px-4 items-center gap-4'
      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-ui)' }}>
      <button 
        className='hover:opacity-70 p-2 rounded-full transition-colors' 
        onClick={() => setView('NewChat')}
      >
        <ArrowLeft size={22} style={{ color: 'var(--text-primary)' }} />
      </button>
      <h1 className='text-lg font-semibold' style={{ color: 'var(--text-primary)' }}>
        New Contact
      </h1>
    </header>
      
    {/* Form Container */}
    <div className='flex-1 p-6 flex flex-col gap-6'>

      {/* Profile Icon Placeholder */}
      <div className="flex justify-center py-4">
        <div className="p-8 rounded-full" style={{ backgroundColor: 'var(--bg-item-hover)' }}>
          <User size={48} style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Name Inputs */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 border-b pb-2" style={{ borderColor: 'var(--border-ui)' }}>
          <User size={20} style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="First Name"
            className="outline-none bg-transparent w-full text-sm"
            style={{ color: 'var(--text-primary)' }}
          />
        </div>
        <div className="flex items-center gap-3 border-b pb-2 ml-8" style={{ borderColor: 'var(--border-ui)' }}>
          <input
            type="text"
            placeholder="Last Name (Optional)"
            className="outline-none bg-transparent w-full text-sm"
            style={{ color: 'var(--text-primary)' }}
          />
        </div>
      </div>

      {/* Phone Number Input */}
      <div className="flex items-center gap-3 border-b pb-2" style={{ borderColor: 'var(--border-ui)' }}>
        <Phone size={20} style={{ color: 'var(--text-secondary)' }} />
        <select
          className="outline-none bg-transparent text-sm pr-1"
          style={{ color: 'var(--text-primary)' }}
        >
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+33">🇫🇷 +33</option>
          <option value="+49">🇩🇪 +49</option>
          <option value="+39">🇮🇹 +39</option>
          <option value="+34">🇪🇸 +34</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
          <option value="+86">🇨🇳 +86</option>
          <option value="+55">🇧🇷 +55</option>
          <option value="+7">🇷🇺 +7</option>
          <option value="+971">🇦🇪 +971</option>
          <option value="+966">🇸🇦 +966</option>
          <option value="+27">🇿🇦 +27</option>
          <option value="+20">🇪🇬 +20</option>
          <option value="+234">🇳🇬 +234</option>
          <option value="+254">🇰🇪 +254</option>
          <option value="+92">🇵🇰 +92</option>
          <option value="+880">🇧🇩 +880</option>
        </select>
        <div className="w-px h-4" style={{ backgroundColor: 'var(--border-ui)' }} />
        <input
          type="tel"
          placeholder="Phone Number"
          className="outline-none bg-transparent w-full text-sm"
          style={{ color: 'var(--text-primary)' }}
        />
      </div>

      {/* Tick / Save Button */}
      <div className="flex justify-end mt-2">
        <button
          className="p-3 rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: 'var(--bg-item-hover)' }}
          onClick={() => { /* handle save */ }}
        >
          <Check size={22} style={{ color: 'var(--text-primary)' }} />
        </button>
      </div>

    </div>
  </div>

    );
}

export default NewContact;