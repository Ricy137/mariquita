import type { Metadata } from 'next';
import NavBar from '@/modules/navBar';
import BgCanvas from './BgCanvas';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web3 writer',
  description: 'Mariquita de Boissière',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <BgCanvas />
        {children}
      </body>
    </html>
  );
}
