/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'media.graphassets.com'
            }
        ]
    }
};

export default nextConfig;
