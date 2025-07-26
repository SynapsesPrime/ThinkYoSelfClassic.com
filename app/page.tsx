'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for joining, ${email}!`);
    setEmail('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white px-4 py-12">
      
      {/* Hero Title + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          ThinkYoSelf Classic 🧠
        </h1>
        <p className="text-center text-lg max-w-xl mb-6">
          Fork your mind. Join the movement. DYOR, but the Y is me.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="/images/hero-tysc-v2.webp"
          alt="ThinkYoSelf Classic Hero"
          width={512}
          height={512}
          className="mb-8 rounded-xl shadow-xl"
          priority
          unoptimized={true}
          onError={(e) => console.log("Hero image failed to load", e)}
        />
      </motion.div>

      {/* Logo */}
      <Image
        src="/images/logo-tysc-v2.webp"
        alt="ThinkYoSelf Logo"
        width={326}
        height={326}
        className="mx-auto my-6"
        priority
        unoptimized={true}
        onError={(e) => console.log("Logo failed to load", e)}
      />

      {/* Mint Address Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white/10 p-6 rounded-2xl shadow-lg max-w-xl w-full mb-6"
      >
        <h2 className="text-xl font-semibold mb-2 text-center">📜 Mint Address</h2>
        <p className="text-md bg-gray-800 px-4 py-2 rounded-md">
          Mint Address:{' '}
          <a
            href="https://solscan.io/token/CgLQ2Ro2tAXxcjCDmfd2zeDrJMkEUKN7yM1wAE9YbjcL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline hover:text-green-300"
          >
            CgLQ2Ro2tAXxcjCDmfd2zeDrJMkEUKN7yM1wAE9YbjcL
          </a>
        </p>
      </motion.div>

      {/* Email Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full max-w-md mb-10"
      >
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
          Get updates from Thinky 📬
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-xl text-black"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-800 px-6 py-2 rounded-xl font-semibold transition"
          >
            Join
          </button>
        </div>
      </motion.form>

      {/* Meme Whitepaper Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-12 bg-white/10 rounded-2xl shadow-lg p-6 max-w-3xl w-full text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-3">📄 ThinkYoSelf Classic Meme Whitepaper</h2>
        <p className="mb-4 text-sm sm:text-base">
          This is the &quot;unofficial&quot; whitepaper, the one written at 3am under the influence of meme-induced enlightenment.
          It contains just enough truth to keep you wondering if we&apos;re joking. Spoiler! We are, but also not.
        </p>
        <Link
          href="/pdfs/ThinkYoSelf-Classic-Meme-Whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl font-semibold transition"
        >
          🧻 Download Meme Whitepaper
        </Link>
        <p className="text-xs mt-3 opacity-80">
          Want the <em>real</em> whitepaper? You&apos;ll need to fork your email for that. Subscribe above.
        </p>
      </motion.section>

      {/* Social Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm mt-10"
      >
        <a href="https://t.me/ThinkYoSelfClassic" target="_blank" rel="noopener noreferrer" className="hover:underline">🧠 Telegram Chat</a>
        <a href="https://t.me/ThinkYoSelfCoinClassic" target="_blank" rel="noopener noreferrer" className="hover:underline">🔮 Broadcast Channel</a>
        <a href="https://twitter.com/ThinkYoSelf" target="_blank" rel="noopener noreferrer" className="hover:underline">🧬 Twitter / X</a>
        <a href="https://www.instagram.com/ThinkYoSelfClassic" target="_blank" rel="noopener noreferrer" className="hover:underline">📸 Instagram</a>
        <a href="https://www.tiktok.com/@ThinkYoSelfClassic" target="_blank" rel="noopener noreferrer" className="hover:underline">🎥 TikTok</a>
        <a href="https://www.facebook.com/ThinkYoSelfClassic" target="_blank" rel="noopener noreferrer" className="hover:underline">👤 Facebook</a>
        <a href="https://www.youtube.com/@thinkyoselfcoinclassic" target="_blank" rel="noopener noreferrer" className="hover:underline">💥 YouTube</a>
        <a href="https://ThinkYoSelfClassic.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">🌐 Culture</a>
        <a href="https://ThinkYoSelfClassic.io" target="_blank" rel="noopener noreferrer" className="hover:underline">🧪 Utility Portal</a>
        <a href="https://ThinkYoSelfCoinClassic.com" target="_blank" rel="noopener noreferrer" className="hover:underline">🧠 Discord HQ</a>
      </motion.div>
    </main>
  );
}
