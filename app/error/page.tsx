import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">⚠️ Error Occurred</h1>
      <p className="text-lg text-center max-w-xl">
        We encountered an issue processing your request. Please try again later.
      </p>
      <div className="flex gap-4 mt-8">
        <Link
          href="/whitepaper"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}