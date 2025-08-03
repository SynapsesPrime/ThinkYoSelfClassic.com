'use client';

import Script from 'next/script';
import { useRouter } from 'next/navigation';

export default function WhitepaperPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        router.push('/thank-you'); // Redirect to thank you page
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

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
  <input
    type="email"
    name="EMAIL"
    id="EMAIL"
    required
    placeholder="Enter your email"
    className="w-full px-4 py-2 text-black bg-white rounded shadow"
  />
  
  <input type="hidden" name="sib_success_url" value="https://thinkyoselfclassic.com/confirm" />
  <input type="hidden" name="sib_error_url" value="https://thinkyoselfclassic.com/error" />

  <button
    type="submit"
    className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
  >
    Subscribe
  </button>
</form>

          </div>
        </div>
      </div>

      {/* Improved Script loading */}
      <Script 
        strategy="afterInteractive" 
        src="https://sibforms.com/forms/end-form/build/main.js" 
      />
      <Script 
        strategy="afterInteractive" 
        src="https://www.google.com/recaptcha/api.js?hl=en" 
      />
    </div>
  );
}