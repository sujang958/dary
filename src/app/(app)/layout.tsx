import type { Metadata } from 'next'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-pretendard bg-black text-white'>
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
