'use client';

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back</h2>

        {/* Google Sign-In */}
        <button
          onClick={() => console.log('Google Sign-In')}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span>Sign in with Google</span>
        </button>

        <div className="relative text-center text-gray-400 text-sm">
          <span className="bg-white px-2 relative z-10">or sign in with email</span>
          <hr className="absolute top-1/2 w-full border-t border-gray-300 z-0" />
        </div>

        {/* Email/Password Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
