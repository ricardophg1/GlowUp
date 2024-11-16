import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/navigation';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/loading-spinner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlowUp | Customer Success Platform',
  description: 'Centralize and automate your customer success operations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <Suspense fallback={<LoadingSpinner />}>
              <main>{children}</main>
            </Suspense>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}