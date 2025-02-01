/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '116.202.146.216',
                port: '1337',
                pathname: '/uploads/**',
                search: '',
            }
        ]
    },
};

export default nextConfig;
