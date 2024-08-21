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
        'greenenergyfarm.in',
        'mir-s3-cdn-cf.behance.net'
      ], 
    },


    async redirects() {
      return [
        {
          source: '/our-works/',
          destination: '/portfolio/',
          permanent: true,
        },
        {
          source: '/our-packages/',
          destination: '/packages/',
          permanent: true,
        },
        {
          source: '/blogs/ultimate-guide-standout-branding-in-dubai/',
          destination: '/blogs/ultimate-guide-standout-branding-dubai/',
          permanent: true,
        },
        {
          source: '/blogs/how-ai-generated-content-play-in-seo/',
          destination: '/blogs/ai-generated-content-play-seo/',
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
