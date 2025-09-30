/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  // Renderではstandaloneは使用しない
  // output: 'standalone',
  
  // Render用の設定
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  
  // 画像の最適化を無効化（外部URLを使用しない場合）
  images: {
    unoptimized: true
  }
};

export default nextConfig;