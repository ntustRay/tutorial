/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.course-api.com',
        port: '',
        pathname: '/images/**',
      }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'https://studious-goldfish-v6q574p9g4j2wj4p-3000.app.github.dev/'
      ]
    }
  }
};

export default nextConfig;
