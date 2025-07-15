'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/graphql-client'
import { GET_POSTS } from '@/lib/queries'
import { WordPressPost } from '@/types/wordpress'

export default function Home() {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await client.query({
          query: GET_POSTS,
        })
        console.log(data)
        setPosts(data.posts.nodes)
      } catch (err) {
        setError('Помилка завантаження постів з WordPress')
        console.error('GraphQL error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Завантаження...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Практик Next.js з WordPress GraphQL
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {post.featuredImage && (
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div 
                className="text-gray-600 dark:text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('uk-UA')}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Пости не знайдено. Перевірте налаштування GraphQL.
        </div>
      )}
    </main>
  )
} 