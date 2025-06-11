'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  type: 'user' | 'partner';
  receivedAt: string; // formatted for display
};

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, 'messages'), orderBy('receivedAt', 'desc'));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            name: d.name,
            email: d.email,
            message: d.message,
            type: d.type,
            receivedAt: formatTimestamp(d.receivedAt),
          };
        }) as Message[];

        setMessages(data);
        setLoading(false);
      } catch {
        setError('Failed to load messages.');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return { messages, loading, error };
}

function formatTimestamp(ts: Timestamp): string {
  const date = ts.toDate();
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
