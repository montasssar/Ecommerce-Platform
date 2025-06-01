// lib/auth.ts

import { auth, provider } from './firebase';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

/**
 * Sign in using Google OAuth
 */
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (err) {
    console.error('❌ Google Sign-in failed:', err);
    throw err;
  }
}

/**
 * Sign up using email & password
 */
export async function signUpWithEmail(email: string, password: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (err) {
    console.error('❌ Email Sign-up failed:', err);
    throw err;
  }
}

/**
 * Log in using email & password
 */
export async function loginWithEmail(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (err) {
    console.error('❌ Email Sign-in failed:', err);
    throw err;
  }
}

/**
 * Log out the current user
 */
export async function logoutUser() {
  try {
    await signOut(auth);
    console.log('✅ User signed out');
  } catch (err) {
    console.error('❌ Logout error:', err);
    throw err;
  }
}
