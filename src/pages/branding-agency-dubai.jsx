

import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import TestimonialSlider from '@/components/TestimonialSlider';
import ThreeDSlider from '@/components/WorkSlider';
import { useModalContext } from "@/context/modalContext";
import Package from "@/components/Package";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from "react";
import LocationMap from "@/components/GoogleMap";
import Accordion from "@/components/Accordion";


gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function BestBrandingDigitalMarketingPartnerUae({ ___pageData, allPackagesData, worksData, testimonialData }) {


  const pageData = ___pageData.data.pages.nodes[0]
  const packageData = allPackagesData.data.packages.nodes
  const _testimonial = testimonialData.data.testimonials.nodes
  const sliderBanner = JSON.parse(pageData && pageData?.landingPage1?.sliderBanner)



  // sliderBanner && JSON.parse(sliderBanner).map


  const { setModalFor, setShowModal } = useModalContext()


  const openCallBackModal = () => {
    setShowModal(true)
    setModalFor('callback')
  };




  const services1 = useRef();
  const services2 = useRef();
  const services3 = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box1 li');

      boxes.forEach((box) => {
        gsap.from(box, {
          opacity: 0,
          fontSize: '1rem',
          scrollTrigger: {
            trigger: box,
            start: '+=500',
            end: 'top',
            scrub: true,
            //markers: true,
          },
        }),

          gsap.to(box, {
            opacity: 1,
            fontSize: '1.5rem',
            scrollTrigger: {
              trigger: box,
              start: '-=500',
              end: 'bottom',
              scrub: true,
              //markers: true,
            },
          })
      });
    },



    {
      scope: services1
    }
  );

  useGSAP(

    () => {
      const boxes = gsap.utils.toArray('.box2 li');
      boxes.forEach((box) => {
        gsap.from(box, {
          opacity: 0,
          fontSize: '1rem',
          scrollTrigger: {
            trigger: box,
            start: '+=500',
            end: 'top',
            scrub: true,
            //markers: true,
          },
        }),

          gsap.to(box, {
            opacity: 1,
            fontSize: '1.5rem',
            scrollTrigger: {
              trigger: box,
              start: '-=500',
              end: 'bottom',
              scrub: true,
              //markers: true,
            },
          })
      });
    },
    {
      scope: services2,

    }
  );


  useGSAP(

    () => {
      const boxes = gsap.utils.toArray('.box3 li');
      boxes.forEach((box) => {
        gsap.from(box, {
          opacity: 0,
          fontSize: '1rem',
          scrollTrigger: {
            trigger: box,
            start: '+=500',
            end: 'top',
            scrub: true,
            //markers: true,
          },
        }),

          gsap.to(box, {
            opacity: 1,
            fontSize: '1.5rem',
            scrollTrigger: {
              trigger: box,
              start: '-=500',
              end: 'bottom',
              scrub: true,
              //markers: true,
            },
          })
      });
    },
    {
      scope: services3
    }
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderBanner.length);
        setFadeIn(true);
      }, 500); // Duration of the fade-out effect
    }, 5000); // Duration of the slide display

    return () => clearInterval(interval);
  }, [sliderBanner.length]);


  //console.log(sliderBanner)
  return (
    <>
      <Metatags data={___pageData} />
      <Layout type="landing-page">
        <AOSInit />
        <div className="landing-page">
        <section className="hero hero-lp min-h-[100vh] items-center overflow-hidden relative text-center hero_slider- mt-[-100px]">
      <div
        className={`hero-slide flex items-center min-h-[100vh] ${fadeIn ? 'fade-in' : 'fade-out'}`}
        style={{
           backgroundAttachment: 'fixed !important',
          backgroundPosition: 'center !important',
          backgroundRepeat: 'no-repeat !important',
          backgroundSize: 'cover !important',
          backgroundImage: `url(${sliderBanner[currentSlide].img})`
        }}
      >
        <div className="container z-10 relative">
          <div className="lg:w-10/12 grid gap-5 mx-auto">
            <h1 className="lg:text-[3.5rem] md:text-[4rem] sm:text-[3rem] text-[1.5rem] leading-tight mb-3">
              {sliderBanner[currentSlide].title}
            </h1>
            <span className='md:text-[1.2rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: sliderBanner[currentSlide].desc }} />
            <div>
              <button
                onClick={openCallBackModal}
                aria-label={pageData && pageData.landingPage1.heroCtaLable}
                className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10 hover:bg-sky-600 hover:border-sky-600 focus:border-sky-600 focus:text-white mt-5'
              >
                {pageData && pageData.landingPage1.heroCtaLable}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
          <section
            style={{
              backgroundAttachment: 'fixed !important',
              backgroundPosition: 'center !important',
              backgroundRepeat: 'no-repeat !important',
              backgroundSize: 'cover !important',
              background: `url(${pageData && pageData.landingPage1.heroBackground.node.sourceUrl})`
            }}
            className={`flex items-center sm:py-[200px] py-[150px] overflow-hidden relative text-center px-6`} >
            <div className="container z-10 relative">
              <div className="lg:w-10/12 grid gap-5 mx-auto">
                <h1 className="lg:text-[3.5rem] md:text-[4rem] sm:text-[3rem] text-[1.5rem] leading-tight mb-3">
                  {pageData.title && pageData.title}
                </h1>
                <span className='md:text-[1.2rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: pageData.content && pageData.content }} />
                <div>
                  <button onClick={openCallBackModal} aria-label={pageData && pageData.landingPage1.heroCtaLable} className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10  hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white mt-5'>{pageData && pageData.landingPage1.heroCtaLable}</button>
                </div>

              </div>
            </div>
          </section>

          <section>
            <div className="container-boxed z-10 relative sm:py-[150px] py-[50px] px-4 text-center">
              <div className="lg:w-10/12 grid gap-5 mx-auto">
                <span className='md:text-[1.5rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.about }} />
                <div>
                  <button onClick={openCallBackModal} aria-label="Text us" className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10  hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white mt-5'>{pageData && pageData.landingPage1.aboutCta}</button>
                </div>
              </div>
            </div>
          </section>

          <section className="lg:py-10 py-[50px] relative ">
            <BlurAnimation position="top right" />
            <div className="container z-10 relative sm:mb-16">
              <div>
                <div className="lg:basis-[100%] sm:mb-5 mb-1">
                  <h4 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight text-center">{pageData && pageData.landingPage1.packagesHeading}​</h4>
                </div>
                <div>
                  <div className="w-11/12 mx-auto grid gap-8">
                    <div className="items-center grid gap-3 sm:order-1 order-2">
                      <div className="lg:flex grid gap-[50px] mt-10">
                        {packageData && packageData.map((item, key) => {
                          return <div key={key} data-aos="fade-up" data-aos-delay={`${key + 1}00`} >
                            <Package type="mini" key={key} title={item.title} packages={item.packages} content={item.content} /></div>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* FIRST */}

          <section
            style={{
              backgroundAttachment: 'fixed !important',
              backgroundPosition: 'center !important',
              backgroundRepeat: 'no-repeat !important',
              backgroundSize: 'cover !important',
              background: `url('/images/branding.webp')`
            }}
            className="h-screen lg:py-10 py-6 relative text-center flex items-center overflow-hidden bg-overlay-seo px-6"
            ref={services1}
          >
            <div className="container z-10 relative sm:mb-16">
              <div>
                <div>
                  <div className="w-11/12 mx-auto grid gap-8">
                    <div className="lg:basis-[100%] mb-5">
                      <h2 data-aos="fade-up" className="lg:text-[4.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData && pageData.landingPage1.service1Heading}​</h2>
                    </div>
                    <span className='box1 tween md:text-[2rem] text-[1rem]' id="service_list_1" dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.services1List }} />
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* SECOND */}

          <section
            style={{
              backgroundAttachment: 'fixed !important',
              backgroundPosition: 'center !important',
              backgroundRepeat: 'no-repeat !important',
              backgroundSize: 'cover !important',
              background: `url('/images/web-design-development.webp')`
            }}
            className="h-screen lg:py-10 py-6 relative text-center flex items-center overflow-hidden bg-overlay-seo"
            ref={services2}
          >
            <div className="container z-10 relative sm:mb-16">
              <div>
                <div>
                  <div className="w-11/12 mx-auto grid gap-8">
                    <div id="trigger2" />
                    <div className="lg:basis-[100%] mb-5">
                      <h2 data-aos="fade-up" className="lg:text-[4.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData && pageData.landingPage1.service2Heading}​</h2>
                    </div>
                    <span className='box2 tween md:text-[2rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.service2List }} />
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* THIRD */}

          <section
            style={{
              backgroundAttachment: 'fixed !important',
              backgroundPosition: 'center !important',
              backgroundRepeat: 'no-repeat !important',
              backgroundSize: 'cover !important',
              background: `url('/images/digital-marketing.webp')`
            }}
            className="h-screen lg:py-10 py-6 relative text-center flex items-center overflow-hidden bg-overlay-seo"
            ref={services3}
          >
            <div className="container z-10 relative sm:mb-16">
              <div>
                <div>
                  <div className="w-11/12 mx-auto grid gap-8">
                    <div className="lg:basis-[100%] mb-5">
                      <h2 data-aos="fade-up" className="lg:text-[4.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData && pageData.landingPage1.service3Heading}​</h2>
                    </div>
                    <span className='box3 tween md:text-[2rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.service3List }} />
                  </div>
                </div>
              </div>
            </div>

          </section>




          <section
            className={`flex items-center sm:py-[150px] py-[50px]  relative text-center px-6`} >
            <div className="container z-10 relative">
              <div className="lg:w-9/12 grid gap-5 mx-auto">
                <div dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.seoHeading1 }} />
                <h2 className="lg:text-[3.5rem] text-[2rem] leading-tight mb-2">
                  {pageData && pageData.landingPage1.seoHeading2}
                </h2>
                <div>
                  <p className="md:text-[1.5rem] text-[1rem]">{pageData && pageData.landingPage1.seoDescription}</p>
                  <button onClick={openCallBackModal} aria-label={pageData && pageData.landingPage1.seoCta} className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10  hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white mt-10'>{pageData && pageData.landingPage1.seoCta}</button>
                </div>
              </div>
            </div>
            <BlurAnimation position="top right" />
          </section>



          <section className="sm:pt-[200px] pt-[150px] relative text-center flex items-center">
            <div className="container z-10 relative sm:mb-16">
              <div>
                <div>
                  <div className="sm:w-10/12 w-11/12 mx-auto">
                    {pageData.landingPage1.aboutMore.split('||').map((item, key, array) => {


                      const regex = /\*([^*]+)\*/g;

                      const removeBetweenAsterisks = (text) => {
                        return <div dangerouslySetInnerHTML={{ __html: text.replace(regex, '') }} />
                      };

                      const lastIndex = array.length - 1;
                      const mainString = item;
                      const customString = "**";

                      const customStringStart = "*";
                      const customStringEnd = "*";

                      // Find the start and end indexes of the custom string
                      const startIndex = mainString.indexOf(customStringStart);
                      const endIndex = mainString.indexOf(customStringEnd, startIndex + customStringStart.length);

                      // Extract the text between '*' to use as button label
                      const buttonLabel = startIndex !== -1 && endIndex !== -1
                        ? mainString.substring(startIndex + 1, endIndex) // Add 1 to startIndex to skip the '*' itself
                        : ""; // Default label if '*' pair not found



                      return (
                        <div key={key}>
                          <div data-aos="fade-up">
                            <Images
                              imageurl={`/images/3d-glass-${key + 1}.webp`}
                              styles={''}
                              quality={80}
                              width={'250'}
                              height={'250'}
                              alt={'Glass Image'}
                              placeholder={true}
                              classes={`${key % 2 === 0 ? 'end-[100px]' : 'start-[100px]'} block absolute  sm:top-[-170px] top-[-70px] sm:h-[250px] h-[100px] sm:w-[250px] w-[100px]`}
                            />
                          </div>

                          <div className='text-center mb-0  lg:text-start lg:basis-[100%] bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl sm:p-16 p-8 content-p'>
                            {/* <div dangerouslySetInnerHTML={{ __html: cleanedItem }} /> */}





                            {removeBetweenAsterisks(item)}

                            {buttonLabel !== '' ? <div>
                              <button onClick={openCallBackModal} aria-label="Text us" className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10 hover:bg-sky-600 hover:border-sky-600 focus:border-sky-600 focus:text-white mt-5'>
                                {buttonLabel.replace('_button:', '')}
                              </button>
                            </div> : null}
                          </div>

                          {key !== lastIndex ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 739 235"
                              className="sm:block hidden"
                              style={{
                                height: '300px',
                                margin: '0 auto'
                              }}
                            >
                              <g id="Vector 177" filter="url(#filter0_f_7157_1625)">
                                <path fill="#2FA4D8" d="M359.355 100 100 135h539l-279.645-35Z"></path>
                              </g>
                              <defs>
                                <filter id="filter0_f_7157_1625" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="235" width="739">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                  <feGaussianBlur result="effect1_foregroundBlur_7157_1625" stdDeviation="50"></feGaussianBlur>
                                </filter>
                              </defs>
                            </svg>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-bottom-2 text-center sm:pt-[100px]">
            <div className="container grid gap-[30px]">
              <h3 data-aos="fade-up" >{pageData && pageData.landingPage1.aboutBottom2Heading}</h3>
              <div className="about-bottom-2 !sm:pt-[70px] !pt-0" data-aos="fade-up" data-delay="500" dangerouslySetInnerHTML={{ __html: pageData && pageData.landingPage1.aboutBottom2Content }} />
            </div>
            <BlurAnimation position="bottom left" />
          </section>

          <section className="sm:py-32 py-6 relative overflow-x-hidden text-center">
            <div className="z-10 relative">
              <div className=" flex-row gap-10">
                <div className='container relative z-10'>
                  <div className="lg:basis-[100%]">
                    <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight ">{pageData && pageData.landingPage1.worksHeading}​</h2>
                  </div>
                </div>
                <div className="sm:mt-12 relative" data-aos="fade-up">
                  <ThreeDSlider for_page="landing" data={worksData} />
                </div>
              </div>
            </div>
          </section>


          <section
            style={{
              backgroundAttachment: 'fixed !important',
              backgroundPosition: 'center !important',
              backgroundRepeat: 'no-repeat !important',
              backgroundSize: 'cover !important',
              background: `url(${pageData && pageData.landingPage1.bottomBackground.node.sourceUrl})`
            }}
            className={`flex items-center sm:py-[150px] py-6 overflow-hidden relative text-center bg-overlay-seo sm:h-screen h-[60vh] px-6`} >
            <div className="container z-10 relative">
              <div className="lg:w-10/12 grid gap-5 mx-auto">
                <h2 className="lg:text-[3.5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight mb-2">
                  {pageData && pageData.landingPage1.bottomCtaHeading}
                </h2>
                <div>
                  <button onClick={openCallBackModal} aria-label="Text us" className='w-auto rounded-full uppercase font-semibold bg-sky-500 border-sky-500 my-5 rounded-3 p-5 px-10  hover:bg-sky-600 hover:border-sky-600  focus:border-sky-600 focus:text-white mt-5'>{pageData && pageData.landingPage1.bottomCtaLabel}</button>
                </div>
              </div>
            </div>
          </section>


          <section className="sm:py-[150px] py-[50px] relative overflow-x-hidden text-center px-6">
            <div className="z-10 relative">
              <div className=" flex-row gap-10">
                <div className='container relative z-10'>
                  <div className="lg:basis-[100%]">
                    <h4 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight ">{pageData && pageData.landingPage1.testimonialHeading}​</h4>
                  </div>
                </div>
                <div className='container relative z-10'>
                  <div className="relative" data-aos="fade-up">
                    {_testimonial && <TestimonialSlider data={_testimonial} />}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="faq-landingpage text-center">
            <div className="container">
              <div>
                <div className="lg:basis-[100%]">
                  <h4 data-aos="fade-up">{pageData && pageData.landingPage1.faqHeading}​</h4>
                </div>
                <div className="inner" data-aos="fade-up">
                  {pageData && <Accordion data={pageData && pageData.landingPage1.faq} />}
                </div>
              </div>
            </div>
            <BlurAnimation position="bottom right" />
          </section>
          <section className="relative overflow-hidden">
            <LocationMap />
          </section>
        </div>
      </Layout >
    </>
  );
}

export async function getStaticProps(context) {

  try {

    //HOME PAGE DATA
    const _pageData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `  query Posts {
  pages(where: {id: 3915}) {
    nodes {
  
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
           seoKeywords{
          seoKeywords
        }
      landingPage1 {
        seoBackgound {
          node {
            altText
            sourceUrl
          }
        }
        heroBackground {
          node {
            altText
            sourceUrl
          }
        }
        bottomBackground {
          node {
            altText
            sourceUrl
          }
        }
        sliderBanner
        worksHeading
        about
        aboutCta
        aboutMore
        bottomCtaHeading
        bottomCtaLabel
        heroCtaLable
        packagesHeading
        seoCta
        seoDescription
        seoHeading1
        seoHeading2
        service1Heading
        service2Heading
        service2List
        service3Heading
        service3List
        services1List
        testimonialHeading
        aboutBottom2Heading
        aboutBottom2Content
        faqHeading
        faq
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
    const ___pageData = await _pageData.json();


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
              works{
                landigPageAltAndTitle
              }
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
        ___pageData,
        allPackagesData,
        worksData,
        testimonialData
      },
      revalidate: 10, // ISR: Revalidate every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        ___pageData: {},
        allPackagesData: {},
        worksData: {},
        testimonialData: {}
      },
      revalidate: 10, // ISR: Still set a revalidate time even on error
    };
  }
}