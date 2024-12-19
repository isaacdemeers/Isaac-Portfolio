import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getProjectContent(mdFile: string) {
    const fullPath = path.join(process.cwd(), 'content/projects', mdFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Utiliser gray-matter pour parser le markdown
    const { data, content } = matter(fileContents);

    // Convertir le markdown en HTML
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        ...data
    };
} 