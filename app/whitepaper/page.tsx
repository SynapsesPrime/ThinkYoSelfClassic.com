'use client';

export default function WhitepaperPage() {
<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
=======
  const handleSubmit = (e) => {
>>>>>>> e6df102b0b9a0611d47305197c374630f99f863b
    e.preventDefault();
    // 1. HARD REDIRECT - no waiting
    window.location.href = '/confirm';
    // 2. Submit to Brevo in background
<<<<<<< HEAD
    (e.target as HTMLFormElement).submit(); 
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Get the Whitepaper</h1>
      
=======
    e.target.submit(); 
  };

  return (
    <div className="your-styles-here">
>>>>>>> e6df102b0b9a0611d47305197c374630f99f863b
      <form 
        method="POST"
        action="https://ffec09e3.sibforms.com/serve/MUIFABym0-nvtIcidiJUkaDJRHDCS3z0AWmIWnYKI-7QDqAJUjfjroQFjycbIttRDJN4hwdVlp12Qrxp8hueHWJ6GvkK12cy6CSaqQfwDHML0EyQdWC2qczdxU-28Pl70Opq57x0xeZf28A69uw7g0frxK-h5vCLEzka_RPi4Fm_Kstki-5wzN6q35kpngYGHx0WXP--wGBSfZSA"
        onSubmit={handleSubmit}
<<<<<<< HEAD
        className="w-full max-w-md"
=======
>>>>>>> e6df102b0b9a0611d47305197c374630f99f863b
      >
        <input
          type="email"
          name="EMAIL"
          required
          className="your-input-styles"
        />
<<<<<<< HEAD
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded font-bold"
        >
          Access Whitepaper
        </button>
=======
        <button type="submit">Submit</button>
>>>>>>> e6df102b0b9a0611d47305197c374630f99f863b
      </form>
    </div>
  );
}

