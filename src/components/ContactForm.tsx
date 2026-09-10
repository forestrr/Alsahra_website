import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('https://formspree.io/f/placeholder-id', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-canvas p-8 rounded-[16px] border border-hairline shadow-sm text-center">
        <h3 className="font-body font-semibold text-xl text-ink mb-4">Request sent</h3>
        <p className="font-body text-ink-soft text-base mb-6">
          We received your details and will reply with a quote within 24 hours. For urgent requests, please call us directly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-primary font-body font-medium hover:text-primary-soft transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-canvas p-8 rounded-[16px] border border-hairline shadow-sm">
      {status === 'error' && (
        <div className="bg-sand text-ink p-4 rounded-md mb-6 border border-hairline">
          <p className="font-body text-sm font-medium">There was a problem sending your request.</p>
          <p className="font-body text-sm text-ink-soft mt-1">Please try again or contact us directly at info@alsahragroup.com.</p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-ink mb-2">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 font-body text-ink focus:outline-none focus:border-primary transition-colors" 
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-ink mb-2">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 font-body text-ink focus:outline-none focus:border-primary transition-colors" 
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block font-body text-sm font-medium text-ink mb-2">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 font-body text-ink focus:outline-none focus:border-primary transition-colors" 
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="block font-body text-sm font-medium text-ink mb-2">Service Interested In</label>
        <select 
          id="service" 
          name="service" 
          className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 font-body text-ink focus:outline-none focus:border-primary transition-colors appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="Car Parking Shades">Car Parking Shades</option>
          <option value="Tensile Shade Structures">Tensile Shade Structures</option>
          <option value="Customized Tents / Event Tents">Customized Tents / Event Tents</option>
          <option value="Umbrellas">Umbrellas</option>
          <option value="Retractable Pergolas">Retractable Pergolas</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block font-body text-sm font-medium text-ink mb-2">Project Details *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={4}
          className="w-full bg-transparent border border-hairline rounded-md px-4 py-3 font-body text-ink focus:outline-none focus:border-primary transition-colors resize-y" 
        ></textarea>
      </div>
      
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-primary text-canvas font-body font-semibold text-base px-6 py-3 rounded-md hover:bg-primary-soft transition-colors h-[48px] disabled:opacity-70 flex justify-center items-center"
      >
        {status === 'submitting' ? 'Sending...' : 'Get a Free Quote'}
      </button>
    </form>
  );
}
