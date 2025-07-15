import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        slug
        date
        modified
        author {
          node {
            name
            slug
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      slug
      date
      modified
      author {
        node {
          name
          slug
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`

export const GET_PAGES = gql`
  query GetPages($first: Int = 10) {
    pages(first: $first) {
      nodes {
        id
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
        description
        count
      }
    }
  }
` 