



import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import QuickContact from '@/components/QuickContact';
import Images from '@/components/Images';
import { useModalContext } from "@/context/modalContext";
import dynamic from 'next/dynamic';
import Loading from "@/components/Loading";
import Accordion from "@/components/Accordion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";


gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Home({ homePageData, moreServicesDatas, whoWeAreDatas, worksData, testimonialData }) {



  const pageData = homePageData.data.pages.nodes[0].homePage

  const _moreServicesData = moreServicesDatas.data.moreServices.nodes
  const _whoWeAreDatas = whoWeAreDatas.data.allWhoWeAre.nodes
  //const _works = worksData.data.works.nodes
  const _testimonial = testimonialData.data.testimonials.nodes


  //console.log(_testimonial)


  const { setModalFor, setShowModal } = useModalContext()



  const aboutBottom = useRef();



  useGSAP(
    () => {
      const section = document.querySelector('.section-about-bottom');

      // Set initial styles for the section
      gsap.set(section, {
        backgroundImage: 'url(images/about-bottom-bg.webp)',
        opacity: 0,
        backgroundSize: 'cover', // Ensures the image covers the section
        backgroundPosition: 'center', // Centers the image
      }); // Start with opacity 0

      // Create the animation for the section
      gsap.to(section, {
        opacity: 1, // Fade in the background image
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center', // Adjust as needed
          scrub: 1, // Smooth transition
          // markers: true, // Uncomment for debugging

          // Callbacks for entering and leaving the section
          //onLeave: () => gsap.to(section, { opacity: 0 }), // Fade out when leaving
          onEnterBack: () => gsap.to(section, { opacity: 1 }), // Fade in when re-entering
        },
      });
    },
    {
      scope: aboutBottom,
    }
  );








  const openHeroModal = () => {
    setShowModal(true)
    setModalFor('hero')
  };


  const openOfferModal = () => {
    setShowModal(true)
    setModalFor('offer')
  };


  const openDownloadModal = () => {
    setShowModal(true)
    setModalFor('download')
  };

  let htmlString = pageData.seoVisibilityReportHeading1 && pageData.seoVisibilityReportHeading1
  // Method: Basic string manipulation
  let strippedHtml = htmlString.replace('<p>', '').replace('</p>', '');



  const PortfolioSlider = dynamic(() => import('../components/WorkSlider'), {
    loading: () => <Loading />,
    ssr: false,
  });


  const TestimonialSlider = dynamic(() => import('../components/TestimonialSlider'), {
    loading: () => <Loading />,
    ssr: false,
  });


  const VideoHome = dynamic(() => import('../components/Video'), {
    loading: () => <Loading />,
    ssr: false,
  });



  const BlurAnimation = dynamic(() => import('../components/BlurAnimation'), {
    // loading: () => <Loading />,
    ssr: false,
  });


  const ShapeAnimation = dynamic(() => import('../components/ShapeAnimation'), {
    //loading: () => <Loading />,
    ssr: false,
  });


  const BackgroundAnimation = dynamic(() => import('../components/BackgroundAnimation'), {
    //loading: () => <Loading />,
    ssr: false,
  });


  const HeroContent = dynamic(() => import('../components/HeroDescription'), {
    ///loading: () => <Loading />,
    ssr: false,
  });
  return (
    <>
      <Metatags data={homePageData} />
      <Layout>
        <AOSInit />
        <section className="hero-home mt-[-100px] ">
          <div className="container">
            <div className="wrpr">
              <HeroContent
                title={pageData && pageData.heroTitle}
                animatedHeading={pageData && pageData.heroAnimatedHeading}
                desc={pageData.heroDescription && pageData.heroDescription}
                modalAction={openHeroModal}
              />
            </div>
          </div>
          <BackgroundAnimation />
        </section>
        <section className="about">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h1 >
                  {pageData.aboutHeadingTop && pageData.aboutHeadingTop}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="about-2">
          <div className="container">
            <div className="wrpr">
              <div className="col-left">
                <h2 className="col-right">{pageData.aboutHeading && pageData.aboutHeading}</h2>
              </div>
              <div className="lg:basis-[50%]">
                <p >{pageData.aboutDescription && pageData.aboutDescription}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="container">
            <QuickContact
              data={[pageData.aboutCta1 && pageData.aboutCta1, pageData.aboutCta2 && pageData.aboutCta2]}
            />
          </div>
          <BlurAnimation position="top right" />
        </section>
        <section className="about-3">
          <div className="container">
            <div className="lg:basis-[100%]">
              <p data-aos="fade-up">{pageData.aboutDescription2 && pageData.aboutDescription2}</p>
            </div>
          </div>
        </section>
        <section className="seo-report container-boxed !my-[30px] !xl:my-[0]">
          <div className="mx-auto">
            <div className="wrpr ">
              <div data-aos="fade-up" className="inner !bg-transparent !backdrop-blur-none">
                <div className="wrpr wrpr-main">
                  <div className="inner !bg-transparent xl:grid">
                    {/* <LottieAnimation animationData={animationData} /> */}
                    <div className="img-wrpr xl:mb-[0] sm:mb-[100px] mb-[40px]" data-aos="fade-up">

                      <div className="photo-box-wrpr">
                        <Images
                          imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-2.svg'}
                          styles={''}
                          quality={100}
                          width={'500'}
                          height={'500'}
                          alt={'SEO expert Dubai'}
                          placeholder={true}
                          classes={'frame-1 block'}
                        />
                        <div className="photo-box">
                          <figure>
                            <Images
                              imageurl={pageData.seoVisibilityReportImage.node.sourceUrl && pageData.seoVisibilityReportImage.node.sourceUrl}
                              styles={''}
                              quality={100}
                              width={'500'}
                              height={'500'}
                              alt={pageData.seoVisibilityReportImage.node.altText && pageData.seoVisibilityReportImage.node.altText}
                              placeholder={true}
                              classes={'w-full block'}
                            />
                          </figure>
                        </div>
                        <Images
                          imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-1.svg'}
                          styles={''}
                          quality={100}
                          width={'500'}
                          height={'500'}
                          alt={'SEO marketing agency uae'}
                          placeholder={false}
                          classes={'frame-1 block top-0'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content !p-0 !flex !items-center">
                    <div>
                      <h3 dangerouslySetInnerHTML={{ __html: strippedHtml }} />
                      <h2>{pageData.seoVisibilityReportHeading2 && pageData.seoVisibilityReportHeading2}</h2>
                      <p>{pageData.seoVisibilityReportHeadingDescription && pageData.seoVisibilityReportHeadingDescription}</p>
                      <button title="Text us" aria-label="Text us" className='btn' onClick={openOfferModal} >Text us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="top left" />
        </section>
        <section className="services-1 ">
          <div className="container-boxed">
            <div className="wrpr">
              <div>
                <h2 data-aos="fade-up">{pageData.services1Heading && pageData.services1Heading}​</h2>
                <div data-aos="fade-up" data-delay="500" className="content link-content" dangerouslySetInnerHTML={{ __html: pageData.services1Description && pageData.services1Description }} />
              </div>
              <div className="img-wrpr" data-aos="fade-up">
                <div className="photo-box-wrpr">
                  <Images
                    imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-2.svg'}
                    styles={''}
                    quality={100}
                    width={'500'}
                    height={'500'}
                    alt={'SEO expert Dubai'}
                    placeholder={true}
                    classes={'frame-1 block'}
                  />
                  <div className="photo-box">
                    <figure>
                      <Images
                        imageurl={pageData.serviceImage.node.sourceUrl && pageData.serviceImage.node.sourceUrl}
                        styles={''}
                        quality={100}
                        width={'500'}
                        height={'500'}
                        alt={pageData.serviceImage.node.altText && pageData.serviceImage.node.altText}
                        placeholder={true}
                        classes={'w-full block'}
                      />
                    </figure>
                  </div>
                  <Images
                    imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-1.svg'}
                    styles={''}
                    quality={100}
                    width={'500'}
                    height={'500'}
                    alt={'SEO marketing agency uae'}
                    placeholder={false}
                    classes={'frame-1 block top-0'}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-2 ">
          <div className="container">
            <div className="lg:flex">
              <div className="lg:basis-[50%]">
                <div className="wrpr">
                  <h2 data-aos="fade-up">{pageData.services2Heading && pageData.services2Heading}​</h2>
                </div>
              </div>
              <div className="lg:basis-[50%]">
                <div className='have-link list-para' dangerouslySetInnerHTML={{ __html: pageData.services2Description }} />
              </div>
            </div>
          </div>
        </section>
        <section className="downlod relative z-[1]">
          <div className="container">
            <div data-aos="fade-up" className="box-1 bg-gradient-2 text-center lg:text-start lg:basis-[100%] bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl sm:p-16 p-8 lg:flex grid lg:gap-5 gap-[16px] align-middle justify-between items-center">
              <h3 className="sm:text-[24px] text-[20px]">{pageData.downloadHeading && pageData.downloadHeading}</h3>
              <button title="Download" aria-label="Download" className='btn' onClick={openDownloadModal}>Download</button>
            </div>
          </div>
        </section>
        <section className="service-3">
          <BlurAnimation position="bottom right" />
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" >{pageData.servicesListHeading && pageData.servicesListHeading}​</h2>
              </div>
              <div className="content-wrpr">
                {_moreServicesData && _moreServicesData.map((service, key) => {
                  return (<div data-aos="fade-up" key={key} className="box-1 link-content rounded-2xl sm:p-10 p-10 bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg  transform hover:scale-105 duration-500 ease-in-out">
                    <div className="content" dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="service-list-heading">
            <div className="container">
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" >{pageData.servicesListHeading2 && pageData.servicesListHeading2}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="about-bottom">
          <div className="container">
            <div className="wrpr">
              <div className="col-left">
                <h3 className="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.about2Heading && pageData.about2Heading}</h3>
              </div>
              <div className="col-right">
                <p data-aos="fade-up" data-delay="500">{pageData.about2Description && pageData.about2Description}​</p>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>
        <section className="who-we-are xl:pb-[100px] pb-[50px]">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h4>{pageData.whoWeAreHeading && pageData.whoWeAreHeading}​</h4>
              </div>
              <div className="wrpr-2">
                {_whoWeAreDatas && _whoWeAreDatas.map((item, key) => {
                  return (<div key={key} className="content equal-round bg-gradient-2">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>



        <section className="md:py-[100px] py-[30px] section-about-bottom xl:min-h-screen items-center flex relative overflow-hidden xl:text-start text-center" ref={aboutBottom}>
          <div className="container relative z-10"> {/* Set z-index for content */}
            <div className="xl:flex grid xl:gap-[70px]">
              <div className="lg:basis-[50%]">
                <h3 className="lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">
                  {pageData.aboutBottom2 && pageData.aboutBottom2}
                </h3>
                <div className="about-bottom-2 mt-[30px] xl:mb-[40px] !p-0" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: pageData.aboutBottom2Content && pageData.aboutBottom2Content }} />
              </div>
              <div className="lg:basis-[50%] grid">
                <div className="about-bottom-2 xl:mt-[30px] !p-0" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: pageData.aboutBottom2Content2 && pageData.aboutBottom2Content2 }} />
                <div className="about-bottom-2 !m-0 !p-0" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: pageData.aboutBottom2ContentThree && pageData.aboutBottom2ContentThree }} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 after:absolute after:inset-0 after:bg-[#152a37] after:opacity-90 after:z-0 after:pointer-events-none" />
        </section>



        <section className="works">
          <div className="inner">
            <div className="wrpr">
              <div className='container'>
                <div className="lg:basis-[100%] text-center">
                  <h4 data-aos="fade-up">{pageData.ourWorksHeading && pageData.ourWorksHeading}​</h4>
                </div>
              </div>
              <div className="inner-2" data-aos="fade-up">
                <PortfolioSlider
                  data={worksData}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="faq text-center">
          <div className="container">
            <div>
              <div className="lg:basis-[100%]">
                <h4 data-aos="fade-up">{pageData && pageData.faqHeading}​</h4>
              </div>
              <div className="inner" data-aos="fade-up">
                {pageData && <Accordion data={pageData && pageData.faq} />}
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom right" />
        </section>
        <section className="testimonials text-center">
          <div className="container">
            <div>
              <div className="lg:basis-[100%]">
                <h4 data-aos="fade-up">{pageData.testimonialHeading && pageData.testimonialHeading}​</h4>
              </div>
              <div className="inner" data-aos="fade-up">
                {_testimonial && <TestimonialSlider data={_testimonial} />}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  try {

    //HOME PAGE DATA
    const homeData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
  pages(where: {title: "home"}) {
    nodes {
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
      seoKeywords {
        seoKeywords
      }
      homePage {
        aboutBottom2
        aboutBottom2Content
        aboutBottom2Content2
        aboutBottom2ContentThree
        aboutBottom2
        aboutHeadingTop
        about2Description
        about2Heading
        aboutCta1
        aboutCta2
        aboutDescription
        aboutDescription2
        aboutHeading
        heroTitle
        services2Description
        heroCtaLabel
        downloadHeading
        downloadHeadingCta
        heroDescription
        heroAnimatedHeading
        heroCtaLabel
        ourWorksHeading
        seoVisibilityReportHeading1
        seoVisibilityReportHeading2
        seoVisibilityReportHeadingCtaLabel
        seoVisibilityReportHeadingDescription
        faqHeading
        faq
        seoVisibilityReportImage {
          node {
            altText
            sourceUrl
          }
        }
        seoVisibilityReportVideo
        services1Description
        services2Heading
        servicesListHeading
        servicesListHeading2
        testimonialHeading
        whoWeAreHeading
        services1Heading
        serviceImage {
          node {
            altText
            sourceUrl
          }
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
    const homePageData = await homeData.json();



    //MORE SERVICES DATA
    const moreServiceData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        moreServices{
         nodes{
           title
           content
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
    const moreServicesDatas = await moreServiceData.json();


    //WHO WE ARE DATA
    const whoWeAreData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        allWhoWeAre{
         nodes{
           title
           content
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
    const whoWeAreDatas = await whoWeAreData.json();


    //WORKS DATA
    const workData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
        works {
          nodes {
            title
            content
            featuredImage{
              node{
                sourceUrl
                altText
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
    const worksData = await workData.json();


    //TESTIMONIAL DATA
    const testimonialsData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
      testimonials{
       nodes{
         title
         content
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
    const testimonialData = await testimonialsData.json();

    return {
      props: {
        homePageData,
        moreServicesDatas,
        whoWeAreDatas,
        worksData,
        testimonialData
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        homePageData: {},
        moreServicesDatas: {},
        whoWeAreDatas: {},
        worksData: {},
        testimonialData: {}
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}