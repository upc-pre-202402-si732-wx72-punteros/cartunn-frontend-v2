/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/login',
            },
            {
                source: '/sign-up',
                destination: '/signup',
            }
        ];
    },
};

export default nextConfig;