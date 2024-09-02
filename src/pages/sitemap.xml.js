import { frontendUrl, wordpressUrl } from "@/utils/variables";
const GRAPHQL_QUERY_URL = `${wordpressUrl}/graphql`;

// Updated GraphQL query to fetch both pages and blogs
const GRAPHQL_QUERY = `
  query SiteContent {
    pages(first: 500) {
      nodes {
        uri
      }
    }
    allBlogs(first: 500) {
      nodes {
        slug
      }
    }
  }
`;

// List of URLs to exclude
const EXCLUDED_URLS = [
  `${frontendUrl}thankyou-schedule-appointment-with-basheer/`,
  `${frontendUrl}schedule-appointment-with-basheer/`,
  `${frontendUrl}thank-you-schedule-call/`,
  `${frontendUrl}thank-you/`,
  `${frontendUrl}home/`,
].map(url => url.replace(/\/$/, '')); // Remove trailing slashes for comparison

// Function to generate the sitemap XML
function generateSiteMap(pages, blogs) {
  // Ensure frontendUrl does not end with a slash
  const baseUrl = frontendUrl.endsWith('/') ? frontendUrl.slice(0, -1) : frontendUrl;

  // Map blog slugs to URIs
  const blogPages = blogs.map(({ slug }) => ({
    uri: `/blogs/${slug}/`
  }));

  // Combine pages and blog pages
  const allContent = [...pages, ...blogPages];

  // Filter out excluded URLs
  const filteredContent = allContent.filter(({ uri }) => {
    // Construct full URL for each page or blog
    const fullUrl = `${baseUrl}${uri}`.replace(/\/$/, ''); // Normalize URL by removing trailing slash
    return !EXCLUDED_URLS.includes(fullUrl);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}/</loc>
     </url>
 
     ${filteredContent
      .map(({ uri }) => {
        // Construct the full URL for each page or blog
        const fullUrl = `${baseUrl}${uri}`.replace(/\/$/, '');
        return `
           <url>
             <loc>${fullUrl}/</loc>
           </url>
         `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the server-side logic
}

export async function getServerSideProps({ res }) {
  // Fetch the GraphQL data
  const response = await fetch(GRAPHQL_QUERY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: GRAPHQL_QUERY }),
  });

  const { data } = await response.json();
  const pages = data.pages.nodes;
  const blogs = data.allBlogs.nodes;

  // Generate the XML sitemap with the filtered pages and blog data
  const sitemap = generateSiteMap(pages, blogs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
