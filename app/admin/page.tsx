// app/admin/page.tsx
'use client';

import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Welcome back, Admin 👋</h2>
      <p className="text-gray-600">Here’s a quick overview of your store’s status.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder dashboard cards */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Total Products</h3>
          <p className="text-3xl font-mono text-indigo-600">—</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">New Messages</h3>
          <p className="text-3xl font-mono text-indigo-600">—</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Sales (Coming Soon)</h3>
          <p className="text-3xl font-mono text-indigo-600">—</p>
        </div>
      </div>
    </div>
  );
}
