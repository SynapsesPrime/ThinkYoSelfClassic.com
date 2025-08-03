'use client';

export default function WhitepaperPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. HARD REDIRECT - no waiting
    window.location.href = '/confirm';
    // 2. Submit to Brevo in background
    e.target.submit(); 
  };

  return (
    <div className="your-styles-here">
      <form 
        method="POST"
        action="https://ffec09e3.sibforms.com/serve/MUIFABym0-nvtIcidiJUkaDJRHDCS3z0AWmIWnYKI-7QDqAJUjfjroQFjycbIttRDJN4hwdVlp12Qrxp8hueHWJ6GvkK12cy6CSaqQfwDHML0EyQdWC2qczdxU-28Pl70Opq57x0xeZf28A69uw7g0frxK-h5vCLEzka_RPi4Fm_Kstki-5wzN6q35kpngYGHx0WXP--wGBSfZSA"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="EMAIL"
          required
          className="your-input-styles"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

