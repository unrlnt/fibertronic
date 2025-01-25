/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '192.168.2.18',
                port: '1337',
                pathname: '/uploads/**',
                search: '',
            }
        ]
    },
};

export default nextConfig;
