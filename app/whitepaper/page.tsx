'use client'; // Must be at the very top

import Script from 'next/script';
import { motion } from 'framer-motion';

export default function WhitepaperPage() { // Ensure this is the default export
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Get the Whitepaper</h1>

      <motion.div
        className="sib-form-container max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form
  method="POST"
  action="https://ffec09e3.sibforms.com/serve/MUIFABym0-nvtIcidiJUkaDJRHDCS3z0AWmIWnYKI-7QDqAJUjfjroQFjycbIttRDJN4hwdVlp12Qrxp8hueHWJ6GvkK12cy6CSaqQfwDHML0EyQdWC2qczdxU-28Pl70Opq57x0xeZf28A69uw7g0frxK-h5vCLEzka_RPi4Fm_Kstki-5wzN6q35kpngYGHx0WXP--wGBSfZSA"
  className="relative"
>
  {/* Honeypot field */}
  <input 
    type="text" 
    name="firstname" 
    className="absolute opacity-0 h-0 w-0" 
    tabIndex={-1}
    autoComplete="off"
  />
  
  {/* Real form fields */}
  <input
    type="email"
    name="EMAIL"
    required
    className="w-full px-4 py-2 text-black bg-white rounded shadow mb-4"
  />
  <button type="submit">Access Whitepaper</button>
</form>
      </motion.div>

      <Script 
        strategy="afterInteractive" 
        src="https://sibforms.com/forms/end-form/build/main.js" 
      />
    </div>
  );
}
