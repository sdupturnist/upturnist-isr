import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from "@/components/BlurAnimation";
import ShapeAnimation from "@/components/ShapeAnimation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Package from "@/components/Package";
import ComparePackages from "@/components/PackageCompare";



export default function Packages({ packagesPageData, allPackagesData }) {


  const pageData = packagesPageData.data.pages.nodes[0]

  const packageData = allPackagesData.data.packages.nodes







  return (
    <>
      <Metatags data={packagesPageData} />
      <Layout>
        <AOSInit />
        <section style={{ marginTop: '-120px' }} className="package-page">
          <BlurAnimation position="bottom left" />
          <div className="container">
            <div className="wrpr">
              <div className="inner">
                <h1 data-aos="fade-up"  dangerouslySetInnerHTML={{ __html: pageData.content && pageData.content }} />
                <p  data-aos="fade-up" data-delay="500">{pageData.pages.subHeading && pageData.pages.subHeading}</p>
                <div className="inner-2">
                  {packageData && packageData.map((item, key) => {
                    // console.log(item.content)
                    return <Package key={key} title={item.title} packages={item.packages} content={item.content} />
                  })}
                </div>
                <ComparePackages data={packageData} />
              </div>
              {/* <div className="flex items-center sm:order-2 order-1"> */}
              {/* <ShapeAnimation large /> */}
              {/* </div> */}
            </div>
          </div>
          <div className="inner-3">
            <BackgroundAnimation />
          </div>
        </section>

      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {

  try {

    //PAGE DATA
    const pageData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        pages(where: {id:3896}) {
          nodes{
            title
            content
             pages{
                subHeading
              }
            featuredImage{
            node{
              altText
              sourceUrl
            }
            }
                seo {
                canonical
focuskw
opengraphSiteName
                    metaDesc
                    metaKeywords
                    title
                    opengraphDescription
                    opengraphSiteName
                    opengraphUrl
                    opengraphImage {
                      altText
                      link
                      sourceUrl
                    }
                    opengraphType
                    opengraphTitle
                    opengraphModifiedTime
                    twitterDescription
                    twitterTitle
                    twitterImage {
                      sourceUrl
                    }
                  }
          }
  }
  }
          `,
      }),
      next: { revalidate: 10 },
    },
      {
        cache: 'force-cache',
        cache: 'no-store'
      }
    );
    const packagesPageData = await pageData.json();



    //PAGE DATA
    const packagesData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts{
       packages( where: {orderby: {order: DESC, field: NAME_IN}}){
        nodes{
          title
          content
          packages{
            features
            price
            subHeading
          }
        }
      }
  }
            `,
      }),
      next: { revalidate: 10 },
    },
      {
        cache: 'force-cache',
        cache: 'no-store'
      }
    );
    const allPackagesData = await packagesData.json();


    return {
      props: {
        packagesPageData,
        allPackagesData
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


