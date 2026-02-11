import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blueTrestle Creative',
  description: 'Building Digital Bridges for Your Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}