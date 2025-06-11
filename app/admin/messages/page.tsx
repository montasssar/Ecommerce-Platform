// app/admin/messages/page.tsx
'use client';

import { useMessages } from '@/hooks/useMessages';
import MessageInbox from '@/components/admin/MessageInbox';

export default function AdminMessagesPage() {
  const { messages, loading, error } = useMessages();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Messages</h1>

      {loading && <p className="text-gray-500">Loading messages...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && <MessageInbox messages={messages} />}
    </div>
  );
}
