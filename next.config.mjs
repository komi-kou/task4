/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  // Renderでは standalone は不要
  // output: 'standalone',
  
  // Render用の設定
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  
  // NextAuthのパスをリライト
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/nextauth/:path*',
      },
    ]
  }
};

export default nextConfig;