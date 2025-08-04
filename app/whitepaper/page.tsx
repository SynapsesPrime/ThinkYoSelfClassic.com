'use client';
import Script from 'next/script';
import { motion } from 'framer-motion';

export default function WhitepaperPage() {
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
          className="w-full bg-white p-6 rounded-lg shadow-xl"
          data-type="subscription"
        >
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="EMAIL"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          {/* Security Fields */}
          <div className="hidden">
            <input type="text" name="first_name" autoComplete="off" tabIndex={-1} />
            <input type="hidden" name="timezone" value={new Date().getTimezoneOffset()} />
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="sib_success_url" value="https://thinkyoselfclassic.com/confirm" />
          <input type="hidden" name="sib_error_url" value="https://thinkyoselfclassic.com/error" />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Access to TYSC Whitepaper
          </button>
        </form>
      </motion.div>

      {/* Required Scripts */}
      <Script 
        strategy="afterInteractive" 
        src="https://sibforms.com/forms/end-form/build/main.js" 
      />
    </div>
  );
}