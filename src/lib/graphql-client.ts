import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'https://backend.atrava.de/graphql',
})

const authLink = setContext((_, { headers }) => {
  // Add any authentication headers if needed
  return {
    headers: {
      ...headers,
      // Add WordPress authentication if needed
      // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_TOKEN}`,
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
}) 