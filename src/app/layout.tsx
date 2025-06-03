import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
    title: 'Momen Technologies – Software Solutions Agency',
    description:
        'Momen Technologies builds high-quality web & mobile software for clients worldwide.',
    icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={font.className}>
        <body>{children}</body>
        </html>
    );
}