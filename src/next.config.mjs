/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/ZswudcwRZK',
                permanent: true,
            },
            {
                source: '/telegram',
                destination: 'https://t.me/degym_dao',
                permanent: true,
            },
            {
                source: '/x',
                destination: 'https://x.com/degym_network',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/DeGym',
                permanent: true,
            },
            {
                source: '/blog',
                destination: 'https://taraxacatalyst.com/',
                permanent: true,
            },
            {
                source: '/disclaimer',
                destination: 'https://docs.degym.net/dao/disclaimer',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
