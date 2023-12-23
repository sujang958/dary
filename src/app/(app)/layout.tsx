import type { Metadata } from 'next'
import '../globals.css'
import Sidebar from '@/components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-pretendard bg-black text-white'>
        <main className="flex flex-row items-stretch">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}
