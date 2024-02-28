/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["https://esm.sh", "https://ui-l.vercel.app", "https://ui-zeta-three.vercel.app"]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
