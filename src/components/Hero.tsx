import { getJSON } from '@/lib/getContent';

export default async function Hero() {
    const { headline, subheadline, cta } = await getJSON<{
        headline: string;
        subheadline: string;
        cta: string;
    }>('hero.json');

    return (
        <section id="hero" className="h-[90vh] flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">{headline}</h1>
            <p className="text-xl text-gray-600 mb-8">{subheadline}</p>
            <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                {cta}
            </a>
        </section>
    );
}