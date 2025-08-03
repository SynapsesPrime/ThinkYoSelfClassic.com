'use client';

import { motion } from 'framer-motion';

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Get the Whitepaper</h1>

        <form
          method="POST"
          action="https://ffec09e3.sibforms.com/serve/MUIFABym0-nvtIcidiJUkaDJRHDCS3z0AWmIWnYKI-7QDqAJUjfjroQFjycbIttRDJN4hwdVlp12Qrxp8hueHWJ6GvkK12cy6CSaqQfwDHML0EyQdWC2qczdxU-28Pl70Opq57x0xeZf28A69uw7g0frxK-h5vCLEzka_RPi4Fm_Kstki-5wzN6q35kpngYGHx0WXP--wGBSfZSA"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          {/* Honeypot Field */}
          <input 
            type="text" 
            name="firstname" 
            className="hidden" 
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Email Field */}
          <label htmlFor="EMAIL" className="block mb-2 font-medium text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="EMAIL"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          {/* Brevo Required Fields */}
          <input type="hidden" name="sib_success_url" value="https://thinkyoselfclassic.com/confirm" />
          <input type="hidden" name="sib_error_url" value="https://thinkyoselfclassic.com/error" />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-md transition duration-200"
          >
            Access Whitepaper
          </button>
        </form>
      </motion.div>
    </div>
  );
}

