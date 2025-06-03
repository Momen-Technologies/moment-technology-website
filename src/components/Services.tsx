import { getJSON } from '@/lib/getContent';

interface Service { title: string; description: string; }

export default async function Services() {
    const services = await getJSON<Service[]>('services.json');

    return (
        <section id="services" className="py-20">
            <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>

            <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 px-6">
                {services.map(s => (
                    <div key={s.title} className="p-6 border border-gray-200 rounded hover:shadow-lg">
                        <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}