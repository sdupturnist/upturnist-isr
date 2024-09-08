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
        source: '/(.*)',
        has: [
              {
                type: 'host',
                value: '(www.upturnist.com|upturnist.com)',
              },
             ],
        permanent: true,
        destination: 'https://upturnist.com/:1',
      },
      {
        source: '/our-works/',
        destination: '/portfolio/',
        permanent: true,
      },
      {
        source: '/branding-digital-marketing-uae/',
        destination: '/branding-agency-dubai/',
        permanent: true,
      },
      {
        source: '/uplearning-and-upsharing/',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/best-branding-digital-marketing-partner-uae/',
        destination: '/branding-agency-dubai/',
        permanent: true,
      },
      {
        source: '/email-marketing',
        destination: '/email-marketing-dubai/',
        permanent: true,
      },
      {
        source: '/steps-essential-business-launch-in-dubai/',
        destination: '/steps-essential-business-launch-dubai/',
        permanent: true,
      },
      {
        source: '/social-media-marketing/',
        destination: '/social-media-management-dubai/',
        permanent: true,
      },
      {
        source: '/search-engine-optimization/',
        destination: '/best-seo-company-dubai/',
        permanent: true,
      },
      {
        source: '/connect-us/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/e-commerce-website',
        destination: '/e-commerce-websites-development/',
        permanent: true,
      },
      {
        source: '/how-ai-generated-content-play-in-seo',
        destination: '/ai-generated-content-play-seo/',
        permanent: true,
      },
      {
        source: '/essential-elements-branding-strategies-in-uae,
        destination: '/essential-elements-branding-strategies-uae/',
        permanent: true,
      },
      {
        source: '/our-packages/',
        destination: '/packages/',
        permanent: true,
      },
      {
        source: '/ultimate-guide-standout-branding-in-dubai/',
        destination: '/ultimate-guide-standout-branding-dubai/',
        permanent: true,
      },
      {
        source: '/how-ai-generated-content-play-in-seo/,
        destination: '/ai-generated-content-play-seo/',
        permanent: true,
      },
      {
        source: '/email-marketing/',
        destination: '/email-marketing-dubai/',
        permanent: true,
      },
      {
        source: '/the-ultimate-guide-to-social-media-marketing-increase-your-presence-on-different-social-media-channels/',
        destination: '/different-social-media-channels/',
        permanent: true,
      },
      {
        source: '/essential-elements-branding-strategies-in-uae/',
        destination: '/essential-elements-branding-strategies-uae/',
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
