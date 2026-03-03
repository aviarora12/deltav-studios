import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono'
});

export const metadata: Metadata = {
  title: 'DELTA V² // Tactical Growth Systems',
  description: 'Skunkworks growth engineering for operators who need velocity.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
