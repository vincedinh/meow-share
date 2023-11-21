'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Login', href: '/login', icon: DocumentDuplicateIcon },
  { name: 'Sign Up', href: '/signup', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-cream-500 p-3 text-sm font-medium hover:bg-cream-500 hover:text-orange-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-cream-600 text-orange-500': link.href === pathname,
              },
              {
                'bg-cream-500 text-black-400': link.href !== pathname,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
