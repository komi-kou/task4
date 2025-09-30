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
  
  // NextAuthのパスをリライト（不要なので削除）
  // rewrites機能は使用しない
};

export default nextConfig;