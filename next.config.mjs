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


    
    
};

export default nextConfig;
