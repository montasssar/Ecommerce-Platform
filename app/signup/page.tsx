'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithGoogle, signUpWithEmail } from '@/lib/auth';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function SignUpPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      router.push('/');
    } catch {
      setError('Google signup failed.');
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      router.push('/');
    } catch {
      setError('Email signup failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span>Sign up with Google</span>
        </button>

        <div className="relative text-center text-gray-400 text-sm">
          <span className="bg-white px-2 relative z-10">or continue with email</span>
          <hr className="absolute top-1/2 w-full border-t border-gray-300 z-0" />
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
