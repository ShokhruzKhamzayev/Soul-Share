/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'us-east-1-shared-usea1-02.graphassets.com'
            }
        ]
    }
};

export default nextConfig;
