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
      //   source: '/:path*',
      //   destination: 'https://upturnist.com/:path*',
      //   permanent: true,
      //   basePath: false, // Ensures that basePath is not considered
      // },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.upturnist.com',
          },
        ],
        destination: 'https://upturnist.com/:path*',
        permanent: true,
      },
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
