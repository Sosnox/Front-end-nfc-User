/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dlst.online',
        port: '',
        pathname: '/uploaded_images/**',
      },
    ],
  },
};

export default nextConfig;

