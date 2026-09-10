import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate instantaneous smooth submission
    setTimeout(() => {
      setStatus('success');
    }, 800);
  }

  if (status === 'success') {
    return (
      <div className="bg-canvas p-8 sm:p-10 rounded-2xl border border-hairline shadow-xl text-center">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-ink mb-2">Request Received</h3>
        <p className="font-body text-ink-soft text-base mb-6 leading-relaxed">
          Thank you. Our engineering team in Sharjah Al Dhaid will review your requirements and provide a formal quotation within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/971505077179?text=Hello%20Al%20Sahra,%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-canvas font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-soft transition-colors"
          >
            <span>Follow up via WhatsApp</span>
          </a>
          <button 
            onClick={() => setStatus('idle')}
            className="text-ink font-body text-sm font-medium hover:text-primary transition-colors px-4 py-3"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-canvas p-6 sm:p-10 rounded-2xl border border-hairline shadow-2xl">
      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-ink mb-1">Request a Quote</h3>
        <p className="font-body text-ink-soft text-xs sm:text-sm">Direct manufacturer pricing with turnkey design & installation across UAE.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="Your name"
            className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors" 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Phone / Mobile *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            placeholder="+971 50 000 0000"
            className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors" 
          />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="name@company.com"
            className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors" 
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Project Location (Emirate)</label>
          <select 
            id="location" 
            name="location" 
            className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors"
          >
            <option value="Sharjah">Sharjah</option>
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Ajman">Ajman</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Umm Al Quwain">Umm Al Quwain</option>
            <option value="Other">Other Region</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="service" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Service or Product Required</label>
        <select 
          id="service" 
          name="service" 
          className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors"
        >
          <option value="Car Parking Shades">Car Parking Shades</option>
          <option value="Tensile Shade Structures">Tensile Shade Structures</option>
          <option value="Pergolas & Louvered Systems">Pergolas & Louvered Systems</option>
          <option value="Customized Tents & Majlis">Customized Tents & Majlis</option>
          <option value="Swimming Pool Shades">Swimming Pool Shades</option>
          <option value="Recreation & Playground Shades">Recreation & Playground Shades</option>
          <option value="Steel Structures & Sheds">Steel Structures & Sheds</option>
          <option value="Steel Fabrication & Staircases">Steel Fabrication & Staircases</option>
          <option value="Fencing & Parking Solutions">Fencing & Parking Solutions</option>
          <option value="Flat / Roof Insulated Panels (Trades)">Flat / Roof Insulated Panels (Trades)</option>
          <option value="Single Skin Profile Sheets">Single Skin Profile Sheets</option>
          <option value="Other Custom Fabrication">Other Custom Fabrication</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block font-body text-xs font-semibold uppercase tracking-wider text-ink mb-1.5">Project Scope / Dimensions *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={3}
          placeholder="Approximate dimensions, number of parking bays, or specific technical requirements..."
          className="w-full bg-sand-soft border border-hairline rounded-xl px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-primary focus:bg-canvas transition-colors resize-y" 
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-primary hover:bg-primary-soft text-canvas font-body font-semibold text-base py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 flex justify-center items-center gap-2 cursor-pointer"
      >
        {status === 'submitting' ? (
          <span>Sending Request...</span>
        ) : (
          <>
            <span>Submit Quotation Request</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </>
        )}
      </button>

      <p className="font-body text-[11px] text-ink-muted text-center mt-3">
        Prefer direct phone? Call our Sharjah Al Dhaid office at <a href="tel:+971505077179" className="text-primary font-semibold hover:underline">+971 50 507 7179</a>
      </p>
    </form>
  );
}
