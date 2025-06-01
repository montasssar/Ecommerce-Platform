'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Techs from '../../components/home/Techs';
import Clothes from '../../components/home/Clothes';
import Decor from '../../components/home/Decor';
import AllProducts from '../../components/home/AllProducts';

const TABS = ['All', 'Techs', 'Clothes', 'Decor'];

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'All';

  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (TABS.includes(initialTab)) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/home?tab=${tab}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Techs':
        return <Techs />;
      case 'Clothes':
        return <Clothes />;
      case 'Decor':
        return <Decor />;
      default:
        return <AllProducts />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-100'
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderContent()}
    </div>
  );
}
