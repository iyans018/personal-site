import fs from "fs"
import path from "path"
import matter from "gray-matter"

const root = process.cwd()

export type Post = {
    slug: string
    metadata: Record<string, any>
    content: string
}

export function getPostSlugs(type: string) {
    return fs.readdirSync(path.join(root, "content", type)).filter(file => file.endsWith(".mdx"))
}

export function getPostBySlug(type: string, slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(root, "content", type, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        metadata: data,
        content,
    }
}

export function getAllPosts(type: string) {
    const slugs = getPostSlugs(type)
    const posts = slugs
        .map((slug) => getPostBySlug(type, slug))
        .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1))
    return posts
}
