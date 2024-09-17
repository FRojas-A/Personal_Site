/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
                {
                    source: "/",
                    destination: "/links",
                    permanent: false
                }
        ]
    },
    output: "standalone"
};

export default nextConfig;
