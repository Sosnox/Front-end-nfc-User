/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'api.dlst.online'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dlst.online',
        pathname: '/uploaded_images/**',
      },
      // If you want to allow any localhost port
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/uploaded_images/**',
      },
    ],
  },
};

export default nextConfig;

