'use client';

export default function WhitepaperPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1. HARD REDIRECT - no waiting
    window.location.href = '/confirm';
    // 2. Submit to Brevo in background
    (e.target as HTMLFormElement).submit(); 
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Get the Whitepaper</h1>
      
      <form 
        method="POST"
        action="https://ffec09e3.sibforms.com/serve/MUIFABym0-nvtIcidiJUkaDJRHDCS3z0AWmIWnYKI-7QDqAJUjfjroQFjycbIttRDJN4hwdVlp12Qrxp8hueHWJ6GvkK12cy6CSaqQfwDHML0EyQdWC2qczdxU-28Pl70Opq57x0xeZf28A69uw7g0frxK-h5vCLEzka_RPi4Fm_Kstki-5wzN6q35kpngYGHx0WXP--wGBSfZSA"
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 text-black rounded"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded font-bold"
        >
          Access Whitepaper
        </button>
      </form>
    </div>
  );
}

