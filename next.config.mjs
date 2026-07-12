/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The design bundle ships under project/ — keep it out of the build graph.
  eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
