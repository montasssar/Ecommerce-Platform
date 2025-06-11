// components/admin/MessageInbox.tsx
'use client';

import { FaUserAlt, FaUserTie } from 'react-icons/fa';

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  type: 'user' | 'partner';
  receivedAt: string; // ISO string or formatted date
};

type Props = {
  messages: Message[];
};

export default function MessageInbox({ messages }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Inbox</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500 text-sm">No messages received yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition bg-gray-50"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  {msg.type === 'partner' ? (
                    <FaUserTie className="text-indigo-600" />
                  ) : (
                    <FaUserAlt className="text-gray-600" />
                  )}
                  <span>{msg.name}</span>
                  <span className="text-gray-400 text-xs">• {msg.email}</span>
                </div>
                <span className="text-xs text-gray-400">{msg.receivedAt}</span>
              </div>
              <p className="text-sm text-gray-800 whitespace-pre-line">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
