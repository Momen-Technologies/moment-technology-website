'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const nav = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
                <Link href="/">
                    <Image src="/logo.png" alt="Momen logo" width={120} height={60} priority />
                </Link>

                {/* desktop nav */}
                <nav className="hidden md:flex space-x-6 text-sm">
                    {nav.map(n => (
                        <a key={n.href} href={n.href} className="hover:text-blue-600">
                            {n.label}
                        </a>
                    ))}
                </nav>

                {/* mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2"
                    aria-label="Toggle navigation"
                >
                    <span className="i-ph-list text-2xl" /> {/* Use any icon lib / Emoji */}
                </button>
            </div>

            {/* mobile menu */}
            {open && (
                <nav className="md:hidden bg-white border-t">
                    {nav.map(n => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="block px-6 py-3 border-b hover:bg-gray-50"
                            onClick={() => setOpen(false)}
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}