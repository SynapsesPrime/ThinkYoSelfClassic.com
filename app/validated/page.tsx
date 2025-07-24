export default function ValidatedPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">✅ Email Verified!</h1>
      <p className="text-lg text-center max-w-xl">
        You've successfully confirmed your email. You’re now officially part of the ThinkYoSelf movement.
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