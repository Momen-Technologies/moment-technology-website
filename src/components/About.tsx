import { getMarkdown } from '@/lib/getContent';
import Markdown from 'react-markdown'; // install: npm i react-markdown

export default async function About() {
    const about = await getMarkdown('about.md');
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="text-3xl font-semibold mb-6">About Us</h2>
                <Markdown className="prose prose-slate mx-auto">{about}</Markdown>
            </div>
        </section>
    );
}