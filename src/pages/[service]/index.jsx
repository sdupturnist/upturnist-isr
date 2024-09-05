import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import EnquiryService from "@/components/EnquiryService";
import MetatagsServiceSingle from "@/components/SeoServiceSingle";
import AnimatedTextCharacter from "@/components/AnimatedText";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Accordion from "@/components/Accordion";



export default function Service({ servicePageData }) {



    // Check if servicePageData is null
    // if (!servicePageData) {
    //     return null;
    // }

    const pageData = servicePageData.data.pages.nodes[0];

    // Check if pageData is undefined or null
    // if (!pageData) {
    //     // Redirect to 404 page
    //     return <p>Page not found</p>;
    // }

    return (
        <>
            <MetatagsServiceSingle data={servicePageData && servicePageData} />
            <Layout>
                <AOSInit />
                <div className="service-single">
                    <section
                        style={{
                            marginTop: '-120px',
                            backgroundImage: `linear-gradient(rgba(0, 26, 42, 0.9), rgba(0, 26, 42, 0.9)), url(${pageData.featuredImage && pageData.featuredImage.node.sourceUrl})`,
                            backgroundSize: 'cover',
                        }}
                        className="hero lg:h-screen h-[80vh] flex items-center sm:py-20 pt-[100px] pb-[24px] py-6 overflow-hidden relative text-center">
                        <div className="container z-10 relative">
                            <div className="grid gap-8">
                                <div className="items-center grid gap-7 sm:order-1 order-2">
                                    <h1 className="lg:text-[4rem] md:text-[3.5rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
                                        <AnimatedTextCharacter text={pageData.title} />
                                    </h1>
                                    {pageData.pages.subHeading && <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">
                                        {pageData.pages.subHeading}
                                    </p>}
                                </div>
                            </div>
                        </div>
                        <BackgroundAnimation />
                    </section>
                    <section className="inner-2">
                        <div className="container z-10 relative">
                            <div className="wrpr-1">
                                <div className="wrpr-2">
                                    <div data-aos="fade-up" className="blog-content" dangerouslySetInnerHTML={{ __html: pageData.content }} />
                                    {pageData?.pages?.faqCommon && <div>
                                        <div className="md:pt-[30px] grid sm:gap-[50px] gap-[30px]">
                                            <div className="lg:basis-[100%]">
                                                <h4 className="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData && pageData?.pages?.faqheadingcommon}​</h4>
                                            </div>
                                            <div className="inner" data-aos="fade-up">
                                                {pageData && <Accordion data={pageData && pageData?.pages?.faqCommon} />}
                                            </div>
                                        </div>
                                        <BlurAnimation position="bottom right" />
                                    </div>}
                                    <EnquiryService />
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

export async function getStaticPaths() {
    async function fetchServices() {
        try {
            const res = await fetch(wordpressGraphQlApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
                      query {
                          pages {
                              nodes {
                                  name
                              }
                          }
                      }
                  `,
                }),
                cache: 'no-store'
            });

            const data = await res.json();
            return data?.data?.pages?.nodes || []; // Return an empty array if nodes are undefined
        } catch (error) {
            console.error('Error fetching services:', error);
            return []; // Return an empty array in case of error
        }
    }

    // Fetch services and create paths
    const services = await fetchServices();

    // Ensure services is defined and not null
    const paths = services.length > 0
        ? services.map(service => ({
            params: { service: service.name }
        }))
        : [];

    return {
        paths,
        fallback: 'blocking', // or 'false' depending on your needs
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const { service } = params;

    try {
        const serviceData = await fetch(wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                  query Posts {
                      pages(where: {name: "${service}"}) {
                          nodes {
                              title
                              content
                              pages {
                                  subHeading
                                    faqheadingcommon
                                faqCommon
                              }
                                   seoKeywords{
          seoKeywords
        }
                              featuredImage {
                                  node {
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
            cache: 'no-store'
        });

        const servicePageData = await serviceData.json();

        // Check if the servicePageData or pageData is null or undefined
        const pageData = servicePageData?.data?.pages?.nodes[0] || null;

        if (!pageData) {
            return {
                notFound: true, // Trigger 404 page
            };
        }

        return {
            props: {
                servicePageData
            },
            revalidate: 10 // Enable Incremental Static Regeneration
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            notFound: true, // Trigger 404 page on error
        };
    }
}
