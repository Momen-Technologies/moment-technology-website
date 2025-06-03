import { getJSON } from '@/lib/getContent';

interface Testimonial {
    name: string;
    company: string;
    feedback: string;
}

export default async function Testimonials() {
    const testimonials = await getJSON<Testimonial[]>('testimonials.json');

    return (
        <section id="testimonials" className="py-20">
            <h2 className="text-3xl font-semibold text-center mb-10">Testimonials</h2>

            {testimonials.map(t => (
                <blockquote
                    key={t.name}
                    className="max-w-xl mx-auto mb-12 text-center px-6"
                >
                    <p className="text-lg italic mb-4">“{t.feedback}”</p>
                    <footer className="text-gray-600">
                        — {t.name}, {t.company}
                    </footer>
                </blockquote>
            ))}
        </section>
    );
}