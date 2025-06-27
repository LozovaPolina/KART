'use client';

import { useState } from 'react';
import { LogOut, User, MapPin, Clock, DownloadIcon, ChevronUp } from 'lucide-react';
import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import PersonalInfoForm from './PersonalInfoForm';
import OrderList from './OrderList';
import DeliverForm from './DeliverForm';
import { useTranslations } from 'next-intl';
import VideoGrid from './VideoGrid'
const ProfilePage = () => {
  const t = useTranslations('ProfilePage');

  const [activeTab, setActiveTab] = useState('personal');
  const [openDropdown, setOpenDropdown] = useState(null);

  const tabs = [
    { key: 'personal', label: t('tabs.personal'), icon: <User size={18} /> },
    { key: 'orders', label: t('tabs.orders'), icon: <Clock size={18} /> },
    {
      key: 'downloads',
      label: t('tabs.downloads.title'),
      icon: <DownloadIcon size={20} />,
      children: [
        { key: 'videos', label: t('tabs.downloads.videos') },
        { key: 'materials', label: t('tabs.downloads.materials') },
        { key: 'posters', label: t('tabs.downloads.posters') },
      ],
    },
    { key: 'shipping', label: t('tabs.shipping'), icon: <MapPin size={18} /> },
  ];

  return (
    <div className="flex flex-col items-center gap-8 mx-auto max-w-[1200px] w-full">
      <HintNavigation
        links={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: t('breadcrumb.profile'), href: '/profile' },
        ]}
      />

      <div className="flex flex-wrap gap-8 items-start rounded-xl  w-full">
        <aside className="w-full md:w-64 sm:h-[504px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] bg-[#F5F5F5] rounded-xl py-6 flex flex-col gap-1">
          <h2 className="text-lg font-semibold mb-2 text-[#1e1e1e] px-6">{t('title')}</h2>

          <ul className="space-y-2 flex flex-col gap-1">
            {tabs.map((tab) => {
              const isOpen = openDropdown === tab.key;
              const isActive = activeTab === tab.key;

              return (
                <li key={tab.key}>
                  <button
                    onClick={() => {
                      if (tab.children) {
                        setOpenDropdown(isOpen ? null : tab.key);
                      } else {
                        setActiveTab(tab.key);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-6 py-1 text-left transition 
                    ${isActive ? 'bg-[#E7EBE5] text-black' : 'text-[#4A4A4A] hover:bg-[#E7EBE5]'}`}
                  >
                    <span className="flex items-center gap-3">
                      {tab.icon}
                      {tab.label}
                    </span>
                    {tab.children && <span className="text-sm">{isOpen ? <ChevronUp /> : <div className="w-6" />}</span>}
                  </button>

                  {tab.children && isOpen && (
                    <ul className="mt-1 space-y-1">
                      {tab.children.map((child) => (
                        <li key={child.key}>
                          <button
                            onClick={() => setActiveTab(child.key)}
                            className={`w-full pl-12 text-left px-6 py-1 text-sm transition 
                            ${activeTab === child.key ? 'bg-[#E7EBE5] text-black' : 'text-[#4A4A4A] hover:bg-[#E7EBE5]'}`}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <button className="flex items-center mt-12  sm:mt-auto gap-2 px-6 py-1 text-sm text-[#49BA4A] hover:underline">
            <LogOut size={16} />
            {t('logout')}
          </button>
        </aside>

        <section className="flex-1 h-fit ">
          {activeTab === 'personal' && <PersonalInfoForm />}
          {activeTab === 'orders' && <OrderList />}
          {activeTab === 'videos' && <VideoGrid />}
          {activeTab === 'materials' && <div>{t('downloads.materials')}</div>}
          {activeTab === 'posters' && <div>{t('downloads.posters')}</div>}
          {activeTab === 'shipping' && <DeliverForm />}
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;

