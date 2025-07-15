export interface WordPressImage {
  node: {
    sourceUrl: string
    altText: string
    mediaDetails?: {
      width: number
      height: number
    }
  }
}

export interface WordPressAuthor {
  node: {
    name: string
    slug: string
  }
}

export interface WordPressCategory {
  nodes: Array<{
    name: string
    slug: string
  }>
}

export interface WordPressPost {
  id: string
  title: string
  excerpt: string
  content?: string
  slug: string
  date: string
  modified: string
  author: WordPressAuthor
  categories: WordPressCategory
  featuredImage?: WordPressImage
}

export interface WordPressPage {
  id: string
  title: string
  excerpt: string
  content?: string
  slug: string
  date: string
  featuredImage?: WordPressImage
}

export interface WordPressCategoryItem {
  id: string
  name: string
  slug: string
  description: string
  count: number
}

export interface PostsResponse {
  posts: {
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
    nodes: WordPressPost[]
  }
}

export interface PostResponse {
  post: WordPressPost
}

export interface PagesResponse {
  pages: {
    nodes: WordPressPage[]
  }
}

export interface CategoriesResponse {
  categories: {
    nodes: WordPressCategoryItem[]
  }
} 