/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        missingSuspenseWithCSRBailout: false
    },
    images: {
        domains: ["media.graphassets.com"]
    }
};

export default nextConfig;
