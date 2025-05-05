import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Binance',
  description: 'Learn about Binance and the world of cryptocurrency',
  icons: {
    icon: [
      {
        url: '/images/binance.png',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/binance.png',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/binance.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
