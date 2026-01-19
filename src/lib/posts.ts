import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags: string[];
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

function getPostPath(slug: string) {
  return path.join(POSTS_DIR, `${slug}.mdx`);
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostLastModified(slug: string): Date {
  const fullPath = getPostPath(slug);
  const stat = fs.statSync(fullPath);
  return stat.mtime;
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = getPostPath(slug);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      excerpt: String(data.excerpt ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    } satisfies PostMeta;
  });

  // Mais recentes primeiro (por date do frontmatter)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const fullPath = getPostPath(slug);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? "1970-01-01"),
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };

  return { meta, content };
}
