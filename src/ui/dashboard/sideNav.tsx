// Modified from: https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages

import Link from 'next/link';
import NavLinks from '@/ui/dashboard/navLinks';
import MeowShareLogo from '@/ui/dashboard/meowShareLogo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-orange-400 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-cream-600 md:w-40">
          <MeowShareLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-cream-400 md:block"></div>
        <form
          action={async () => {
            'use server';
            // await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-cream-400 p-3 text-sm font-medium text-black-400 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
