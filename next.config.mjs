/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['react-i18next'],
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
    }
};

export default nextConfig;