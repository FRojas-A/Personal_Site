/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return []
    },
    output: "standalone",
    env: {
        disable: "true"
    }
};

export default nextConfig;
