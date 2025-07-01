import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Interface for blog post metadata
 */
export interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

/**
 * Directory path for blog content
 */
const BLOG_CONTENT_DIR = path.join(process.cwd(), 'public', 'content', 'blog');

/**
 * Get all blog post slugs from the content directory
 */
export function getBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(BLOG_CONTENT_DIR);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): IBlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): IBlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map(slug => getBlogPost(slug))
    .filter((post): post is IBlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}