'use client';

import { useState } from 'react';
import { LogOut, User, FileDown, MapPin, CreditCard, Clock, DownloadIcon, ChevronUp, ChevronDown } from 'lucide-react';
import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import OrderList from './OrderList';
import DeliverForm from './DeliverForm';

const tabs = [
  { key: 'personal', label: 'Личные данные', icon: <User size={18} /> },
  { key: 'orders', label: 'История заказов', icon: <Clock size={18} /> },
  {
    key: 'downloads',
    label: 'Материалы для скачивания',
    icon: <DownloadIcon />,
    children: [
      { key: 'videos', label: 'Видео' },
      { key: 'materials', label: 'Полезные материалы' },
      { key: 'posters', label: 'Постеры' },
    ],
  },
  { key: 'shipping', label: 'Адрес доставки', icon: <MapPin size={18} /> },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [openDropdown, setOpenDropdown] = useState(null);


  return (
    <div className='flex flex-col items-center gap-8 w-ful'>
      <HintNavigation
        links={[
          { label: "Главная", href: "/" },
          { label: "Профиль", href: "/profile" },
        ]}
      />
      <div className="flex  p-6 gap-8 bg-[#F5F5F5] w-full">

        <aside className="w-64 bg-[#F5F5F5] rounded-xl py-6 shadow-sm flex flex-col gap-1">
          <h2 className="text-lg font-semibold mb-2 text-[#1e1e1e] px-6">ПРОФИЛЬ</h2>

          <ul className="space-y-2 flex flex-col gap-1">
            {tabs.map((tab) => {
              const isOpen = openDropdown === tab.key;
              const isActive = activeTab === tab.key;

              return (
                <li key={tab.key} className='m-0!'>
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
                    {tab.children && <span className="text-sm">{isOpen ? <ChevronUp /> : <div className='w-6'></div>}</span>}
                  </button>

                  {tab.children && isOpen && (
                    <ul className="mt-1 space-y-1">
                      {tab.children.map((child) => (
                        <li key={child.key}>
                          <button
                            onClick={() => setActiveTab(child.key)}
                            className={`w-full pl-12  text-left px-6  py-1  text-sm transition
                           ${activeTab === child.key ? 'bg-[#E7EBE5] text-black ' : 'text-[#4A4A4A] hover:bg-[#E7EBE5]'}`}>
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

          <button className="flex items-center gap-2 px-6 py-1 mt-auto text-sm text-[#49BA4A] hover:underline">
            <LogOut size={16} />
            Выйти с аккаунта
          </button>
        </aside>


        {/* Content */}
        <section className="flex-1   h-fit ">
          {activeTab === 'personal' && <PersonalInfoForm />}
          {activeTab === 'orders' && <OrderList></OrderList>}
          {activeTab === 'videos' && <div>Видео</div>}
          {activeTab === 'materials' && <div>Полезные материалы</div>}
          {activeTab === 'posters' && <div>Постеры</div>}
          {activeTab === 'shipping' && <DeliverForm />}
        </section>

      </div>
    </div>

  );
}


