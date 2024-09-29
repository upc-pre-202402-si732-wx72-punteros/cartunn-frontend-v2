/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['react-i18next'],
    async rewrites() {
        return [
            // General routes
            { source: '/', destination: '/login'},
            { source: '/sign-up', destination: '/signup'},
            { source: '/reset-password', destination: '/resetPassword' },
            // client routes
            { source: '/client/favorites-list', destination: '/client/favoritesList' },
            { source: '/client/your-notifications', destination: '/client/yourNotifications' },
            { source: '/client/all-reports', destination: '/client/allReports' },
            { source: '/client/shopping-cart', destination: '/client/shoppingCart' },
            // staff routes
            { source: '/staff/upload-item', destination: '/staff/uploadItem' },
            { source: '/staff/update-item', destination: '/staff/updateItem' },
            { source: '/staff/remove-item', destination: '/staff/removeItem' },
            { source: '/staff/manage-returns', destination: '/staff/manageReturns' }
        ];
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        loader: 'default',
        dangerouslyAllowSVG: true
    },
};

export default nextConfig;