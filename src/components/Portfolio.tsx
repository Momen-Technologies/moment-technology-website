import Image from 'next/image';
import { getJSON } from '@/lib/getContent';

interface Project {
    name: string;
    description: string;
    image: string;
}

export default async function Portfolio() {
    const projects = await getJSON<Project[]>('portfolio.json');

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-10">Portfolio</h2>

            <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
                {projects.map(p => (
                    <div key={p.name} className="border rounded overflow-hidden">
                        <Image
                            src={`/projects/${p.image}`}
                            alt={`${p.name} screenshot`}
                            width={600}
                            height={400}
                            className="object-cover h-48 w-full"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-1">{p.name}</h3>
                            <p className="text-gray-600 text-sm">{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}