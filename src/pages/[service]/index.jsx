import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import EnquiryService from "@/components/EnquiryService";
import MetatagsServiceSingle from "@/components/SeoServiceSingle";
import AnimatedTextCharacter from "@/components/AnimatedText"
import BackgroundAnimation from "@/components/BackgroundAnimation";


export default function Service({ servicePageData }) {


    //console.log(servicePageData.data.pages.nodes[0])

    const pageData = servicePageData.data.pages.nodes[0]



    //console.log(pageData)




    return (
        <>
            <MetatagsServiceSingle data={servicePageData && servicePageData} />
            <Layout>
                <AOSInit />
             <div className="service-single">
             {/* <section style={{ marginTop: '-120px', */}
                 {/* backgroundImage: `linear-gradient(rgba(0, 26, 42, 0.9), rgba(0, 26, 42, 0.9)), url(${pageData && pageData.featuredImage.node.sourceUrl})`,  */}
                  {/* backgroundSize: 'cover', */}
                  {/* }} className="hero lg:h-screen h-[80vh] flex items-center  sm:py-20 pt-[100px] pb-[24px] py-6 overflow-hidden relative text-center"> */}
                    {/* <div className="container z-10 relative"> */}
                        {/* <div className="grid"> */}
                            {/* <div className="inner-1 "> */}
                                {/* <h1  data-aos="fade-up"> */}
                                    {/* {pageData && pageData.title} */}
                                {/* </h1> */}
                                {/* <p  data-aos="fade-up" data-delay="500">{pageData && pageData.pages.subHeading}</p> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </section> */}


                <section 
                style={{ marginTop: '-120px',
                    backgroundImage: `linear-gradient(rgba(0, 26, 42, 0.9), rgba(0, 26, 42, 0.9)), url(${pageData && pageData.featuredImage.node.sourceUrl})`, 
                     backgroundSize: 'cover',
                     }}
                className="hero lg:h-screen h-[80vh] flex items-center  sm:py-20 pt-[100px] pb-[24px] py-6 overflow-hidden relative text-center">
      <div className="container z-10 relative">
        <div className="grid  gap-8">
          <div className="items-center grid gap-7 sm:order-1 order-2">
            <h1 className="lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
              <AnimatedTextCharacter text={pageData && pageData.title} />
            </h1>
            <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{pageData && pageData.pages.subHeading}</p>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </section>


                <section className="inner-2 ">
                    <div className="container z-10 relative">
                        <div className="wrpr-1 ">
                            <div className="wrpr-2">
                                <div data-aos="fade-up" className="blog-content" dangerouslySetInnerHTML={{ __html: pageData && pageData.content }} />
                             <EnquiryService/>
                            </div>
                        </div>
                    </div>
                    <BlurAnimation position="top right" />
                </section>
             </div>


            </Layout>
        </>
    );
}




export async function getServerSideProps(context) {

    const { params } = context;

    const { service } = params


    // Fetch data from an external API, database, or any other source
    try {

        //BLOG PAGE DATA
        const serviceData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
        pages(where: {name: "`+service+`"}) {
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

        const servicePageData = await serviceData.json();




  



        // -------------------------------------------------------------

        // Pass fetched data as props to the page component
        return {
            props: {
                servicePageData
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}





