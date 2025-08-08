import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'David Crystal - Full-Stack Engineer',
  description: 'Senior Full-Stack Engineer specializing in Next.js, Node.js, and modern web technologies. Building scalable, high-performance applications.',
  keywords: 'Full-Stack Engineer, Next.js, Node.js, React, TypeScript, AWS',
  authors: [{ name: 'David Crystal' }],
  openGraph: {
    title: 'David Crystal - Full-Stack Engineer',
    description: 'Senior Full-Stack Engineer specializing in Next.js, Node.js, and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
} 