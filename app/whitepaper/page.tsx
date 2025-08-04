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
          action="https://ffec09e3.sibforms.com/serve/MUIFADgT8xHAstij3vMUre4A3vn05NJkWjPkDt6D8SFFZnKIUt9FsUkUxxqfK3QffizeKQdM2O7oNWCliW_V-x_WnGRnIKpznoU2yZ4_TDB9QnKDf74mre_bz1uQoqqOJVfjkFN6VZ3wSA_I1vmNCiDUUUfTYZ4sIaZnShJMf7u0sAGSdCaOwl8-BiwEuRinzvMwYOPBiF3F64sM"
          className="w-full"
          data-type="subscription"
        >
          {/* Email Field */}
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-black bg-white rounded shadow mb-4"
          />

          {/* reCAPTCHA Widget */}
          <div 
            className="g-recaptcha mb-4"
            data-sitekey="6LeIA4orAAAAAJfuQGKTpUYmUE_5eABRj30vRubPUR_RECAPTCHA_SITE_KEY"
            data-callback="onSubmit"
            data-size="normal"
          ></div>

          {/* Hidden Fields */}
          <input type="hidden" name="sib_success_url" value="https://thinkyoselfclassic.com/confirm" />
          <input type="hidden" name="sib_error_url" value="https://thinkyoselfclassic.com/error" />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition"
          >
            Access to TYSC Whitepaper
          </button>
        </form>
      </motion.div>

      {/* Required Scripts */}
      <Script 
        strategy="afterInteractive" 
        src="https://www.google.com/recaptcha/api.js?hl=en&render=explicit" 
      />
      <Script 
        strategy="afterInteractive" 
        src="https://sibforms.com/forms/end-form/build/main.js" 
      />
    </div>
  );
}