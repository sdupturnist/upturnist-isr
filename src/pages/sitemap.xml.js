import { frontendUrl, wordpressUrl } from "@/utils/variables";
const EXTERNAL_DATA_URL = `${wordpressUrl}/wp-json/wp/v2/blogs`


function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
     <loc>${frontendUrl}</loc>
   </url>


   <url>
       <loc>${frontendUrl}app-development/</loc>
     </url>
     <url>
     <loc>${frontendUrl}brand-collateral/</loc>
   </url>
   <url>
   <loc>${frontendUrl}branding-consulting/</loc>
 </url>
 <url>
 <loc>${frontendUrl}brand-themes/</loc>
  </url>
     <url>
  <loc>${frontendUrl}contact/</loc>
   </url>
     <url>
   <loc>${frontendUrl}content-marketing/</loc>
    </url>
     <url>
    <loc>${frontendUrl}e-commerce-websites-development/</loc>
     </url>
     <url>
     <loc>${frontendUrl}email-marketing-dubai/</loc>
      </url>
     <url>
      <loc>${frontendUrl}logo-design/</loc>
       </url>
     <url>
       <loc>${frontendUrl}packages/</loc>
        </url>
     <url>
        <loc>${frontendUrl}portfolio/</loc>
         </url>
     <url>
         <loc>${frontendUrl}search-engine-marketing/</loc>
          </url>
     <url>
          <loc>${frontendUrl}best-seo-company-dubai/</loc>
           </url>
     <url>
           <loc>${frontendUrl}social-media-management-dubai/</loc>
            </url>
     <url>
            <loc>${frontendUrl}blogs/</loc>
             </url>
     <url>
             <loc>${frontendUrl}web-design-agency-dubai/</loc>
              </url>
     <url>
             <loc>${frontendUrl}about/</loc>
</url>
 <url>
             <loc>${frontendUrl}branding-digital-marketing-uae/</loc>
</url>
    ${posts
      .map(({ link }) => {
        return `
       <url>
           <loc>${`${frontendUrl}${link.substring(link.indexOf("blogs")).slice(0, -1)}`}/</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;