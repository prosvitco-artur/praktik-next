/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/praktik-next',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'backend.atrava.de' ],
  },
}

module.exports = nextConfig 