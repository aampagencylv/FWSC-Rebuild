import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WeatherBanner from '@/components/WeatherBanner'

export const metadata: Metadata = {
  title: 'Florida Water Sports Coalition',
  description: 'Safer operators. Safer waters. A coalition of Florida liveries and operators committed to passenger safety.',
  openGraph: {
    title: 'Florida Water Sports Coalition',
    description: 'Certified water sports operators across Florida\'s waterways. Safer operators. Safer waters.',
    url: 'https://flwsc.org',
    siteName: 'Florida Water Sports Coalition',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Florida Water Sports Coalition',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Marcellus:wght@400&family=Libre+Caslon+Text:ital@0;1&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <WeatherBanner />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
