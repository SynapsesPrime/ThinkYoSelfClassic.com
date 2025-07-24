export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">🎉 You're In!</h1>
      <p className="text-lg text-center max-w-xl">
        Thank you for subscribing to ThinkYoSelf Classic updates. Check your email for your free whitepaper and stay tuned for exclusive airdrops, alpha, and upcoming launches. Welcome to the movement.
      </p>
      <a
        href="/"
        className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition"
      >
        Back to Home
      </a>
    </div>
  );
}