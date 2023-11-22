import type { Metadata } from 'next'
import { SessionProvider } from "next-auth/react"
import { inter } from '@/ui/fonts';
import '@/ui/globals.css'
import SideNav from '@/ui/dashboard/sideNav';
import { Session } from 'next-auth';


export const metadata: Metadata = {
  title: {
    template: '%s | Meow Share',
    default: 'Dashboard | Meow Share'
  },
  description: 'View your favorite cats.',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session : Session,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden`}>
        <SessionProvider session={session}>
          <div className="w-full flex-none md:w-64">
            <SideNav/>
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </SessionProvider>
      </body>
    </html>
  )
}