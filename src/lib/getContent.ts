import fs from 'fs/promises';
import path from 'path';

export async function getJSON<T = unknown>(file: string): Promise<T> {
    const filePath = path.join(process.cwd(), 'data', file);
    try {
        const raw = await fs.readFile(filePath, 'utf-8');
        return raw.trim() ? (JSON.parse(raw) as T) : ({} as T);
    } catch {
        // file missing → return empty object/array instead of throwing
        return {} as T;
    }
}

export async function getMarkdown(file: string): Promise<string> {
    const filePath = path.join(process.cwd(), 'data', file);
    return fs.readFile(filePath, 'utf-8');
}