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
            },
            {
                source: '/reset-password',
                destination: '/resetPassword',
            }
        ];
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        loader: 'default',
        dangerouslyAllowSVG: true
    },
};

export default nextConfig;