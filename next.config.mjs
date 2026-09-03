/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 全站 URL 形式唯一：不带尾斜杠（首页除外，根路径的 path 永远是 "/"）。
  // 与 vercel.json 的 cleanUrls、每个页面的 canonical、app/sitemap.ts 的 <loc> 保持一致，
  // 避免 Google 因为形式不一致而另选 canonical。
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
