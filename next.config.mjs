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
            },
            {
                source: '/staff/upload-item',
                destination: '/staff/uploadItem',
            },
            {
                source: '/staff/update-item',
                destination: '/staff/updateItem',
            },
            {
                source: '/staff/remove-item',
                destination: '/staff/removeItem',
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