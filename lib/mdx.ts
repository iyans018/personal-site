import fs from "fs"
import path from "path"
import matter from "gray-matter"

const root = process.cwd()

export type Post = {
    slug: string
    metadata: Record<string, any>
    content: string
    readingTime?: string
}

export function getPostSlugs(type: string) {
    const dirPath = path.join(root, "content", type)
    if (!fs.existsSync(dirPath)) return []
    return fs.readdirSync(dirPath).filter(file => file.endsWith(".mdx"))
}

export function getPostBySlug(type: string, slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(root, "content", type, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const readingTime = Math.ceil(words / wordsPerMinute)

    return {
        slug: realSlug,
        metadata: data,
        content,
        readingTime: `${readingTime} min read`,
    }
}

export function getAllPosts(type: string) {
    const slugs = getPostSlugs(type)
    const posts = slugs
        .map((slug) => getPostBySlug(type, slug))
        .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1))
    return posts
}

export function getAllTags(posts: Post[]) {
    const tags = new Set<string>()
    posts.forEach(post => {
        post.metadata.tags?.forEach((tag: string) => tags.add(tag))
    })
    return Array.from(tags).sort()
}
