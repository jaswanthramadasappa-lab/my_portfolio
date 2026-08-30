import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteUrl = 'https://jaswanth-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RAMADASAPPA GARI JASWANTH | B.Tech CSE Student & Web Developer',
  description:
    'Portfolio of Ramadasappa Gari Jaswanth — a B.Tech Computer Science student at MITS building responsive web applications with React, Node.js and exploring Generative AI. Open to internships and placements.',
  keywords: [
    'Jaswanth',
    'RAMADASAPPA GARI JASWANTH',
    'Web Developer',
    'React Developer',
    'B.Tech CSE',
    'Frontend Developer',
    'Portfolio',
    'MITS',
  ],
  authors: [{ name: 'Ramadasappa Gari Jaswanth' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'RAMADASAPPA GARI JASWANTH | B.Tech CSE Student & Web Developer',
    description:
      'B.Tech CSE student building responsive web applications with React and Node.js, and exploring Generative AI. Open to internships and placements.',
    siteName: 'Jaswanth — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAMADASAPPA GARI JASWANTH | B.Tech CSE Student & Web Developer',
    description:
      'B.Tech CSE student building responsive web applications with React and Node.js, and exploring Generative AI.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1116' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
