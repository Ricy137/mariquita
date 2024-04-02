import type { Metadata } from 'next';
import NavBar from '@/modules/navBar';
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
        {children}
      </body>
    </html>
  );
}
