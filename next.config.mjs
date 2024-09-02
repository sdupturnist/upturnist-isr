/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    domains: [
      'admin.upturnist.com',
      'localhost',
      'upturnist.com',
    ],
  },




  async redirects() {
    return [
      // {
      //   source: '/',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'upturnist.com',
      //     },
      //   ],
      //   destination: 'https://www.upturnist.com',
      //   permanent: true,
      // },
     {
        source: '/our-works/',
        destination: '/portfolio/',
        permanent: true,
      },
      {
        source: '/e-commerce-website/',
        destination: '/e-commerce-websites-development/',
        permanent: true,
      },
    ]
  },


};

export default nextConfig;
