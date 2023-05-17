import { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'LinkSaver - Your own link organizer',
  description: 'Linksaver provides best way to organize your links, sharing and collection of links you love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  )
}
