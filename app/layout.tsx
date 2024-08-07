import './globals.css';
import { Inter } from 'next/font/google';
import Component from '@/components/ui/nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RepCheck',
  description: 'IP Reputation Analyzer powered by AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-[#FFFAFA] text-[#1E1E1E]`}>
        <Component/>
        {children}
      </body>
    </html>
  );
}
