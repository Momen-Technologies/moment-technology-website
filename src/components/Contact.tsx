'use client';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            setStatus(res.ok ? 'success' : 'error');
            if (res.ok) form.reset();
        } catch {
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
            <p className="text-center text-gray-600 mb-10">
                Interested in working together? Send us a message!
            </p>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-lg space-y-4 px-6"
            >
                <input
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                >
                    Send Message
                </button>

                {status === 'success' && (
                    <p className="text-green-600 text-center">Thank you! We’ll be in touch.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 text-center">
                        Something went wrong. Please email us instead.
                    </p>
                )}
            </form>
        </section>
    );
}