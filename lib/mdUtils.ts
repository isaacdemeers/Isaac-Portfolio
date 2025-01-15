import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export async function getProjectContent(mdFile: string, folder = 'projects') {
    const fullPath = path.join(process.cwd(), `content/${folder}`, mdFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Utiliser gray-matter pour parser le markdown
    const { data, content } = matter(fileContents);

    // Convertir le markdown en HTML
    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(content);

    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        ...data
    };
} 