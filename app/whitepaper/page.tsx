'use client';

import Script from 'next/script';

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Subscribe to the TYSC Whitepaper</h1>
        <p className="mb-8 text-gray-600">Enter your email below to get instant access.</p>

        {/* Brevo form embed */}
        <div className="sib-form-container max-w-md mx-auto" id="sib-form-container">
          <div id="sib-container" className="text-left">
            <form
              id="sib-form"
              method="POST"
              action="https://ffec09e3.sibforms.com/serve/MUIFADgT8xHAstij3vMUre4A3vn05NJkWjPkDt6D8SFFZnKIUt9FsUkUxxqfK3QffizeKQdM2O7oNWCliW_V-x_WnGRnIKpznoU2yZ4_TDB9QnKDf74mre_bz1uQoqqOJVfjkFN6VZ3wSA_I1vmNCiDUUUfTYZ4sIaZnShJMf7u0sAGSdCaOwl8-BiwEuRinzvMwYOPBiF3F64sM"
              data-type="subscription"
            >
              <label htmlFor="EMAIL" className="block mb-2 font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="EMAIL"
                id="EMAIL"
                required
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 rounded-md mb-4"
              />

              <div className="mb-4">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LeIA4orAAAAAJfuQGKTpUYmUE_5eABRj30vRubP"
                  data-callback="handleCaptchaResponse"
                  id="sib-captcha"
                ></div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
              >
                Subscribe
              </button>

              <input type="text" name="email_address_check" className="hidden" />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>

      {/* Brevo JS + Recaptcha */}
      <Script defer src="https://sibforms.com/forms/end-form/build/main.js" />
      <Script src="https://www.google.com/recaptcha/api.js?hl=en" />
    </div>
  );
}