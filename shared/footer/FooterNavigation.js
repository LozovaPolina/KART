'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx' // Optional: helps clean up conditional classes

function FooterNavigation() {
  const path = usePathname();

  const links = [
    { href: '/', label: 'Главная' },
    { href: '/blog', label: 'Блог' },
    { href: '/contacts', label: 'Контакты' },
    { href: '/terms-of-use', label: 'Условия использования' },
  ];

  return (
    <div className='flex flex-col text-[15px] items-center md:items-start'>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h5 className='text-[#848484] text-[25px] items-center md:items-start'>Навигация</h5>
        <div className="flex flex-col gap-1 items-center md:items-start">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'transition-colors',
                path === link.href ? 'text-[#81D742] font-medium' : 'text-[#848484] hover:text-[#81D742]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterNavigation;