import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import AnimatedImage from "@/components/AnimatedImage";
import Timeline from "@/components/TimeLine";
import PageHeading from "@/components/PageHeading";



export default function WhoWeAre({ aboutPageData, coreValuesData, deliveryMethodData, teamsData, timelineData }) {


  const pageData = aboutPageData.data.pages.nodes[0]
  const _coreValues = coreValuesData.data.allCoreValues.nodes
  const _deliveryMethod = deliveryMethodData.data.allDeliveryMethod.nodes
  const _teamsData = teamsData.data.teams.nodes
  const _timelineData = timelineData.data.allTimeLine.nodes



  // console.log(_timelineData)


  return (
    <>
      <Metatags data={aboutPageData} />
      <Layout>
        <AOSInit />
        <PageHeading heading={pageData.title && pageData.title} subHeading={pageData.pages.subHeading && pageData.pages.subHeading} />
        <section className="about-section-1 ">
          <div className="container ">
            <div className="wrpr">
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="inner" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutDescription1 && pageData.aboutUs.aboutDescription1 }} />
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="inner-2" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutDescription2 && pageData.aboutUs.aboutDescription2 }} />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section-2">
          <div className="container">
            <div className="wrpr">
              <div className="inner">
                <h2 data-aos="fade-up">{pageData.aboutUs.journeyHeading && pageData.aboutUs.journeyHeading}​</h2>
              </div>
              <Timeline data={_timelineData} />
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>
        <section className="about-section-3">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up" >{pageData.aboutUs.approchHeading && pageData.aboutUs.approchHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.approachContent && pageData.aboutUs.approachContent }} />   </div>
            </div>
          </div>
          {pageData.aboutUs.approchBanner.node.sourceUrl && pageData.aboutUs.approchBanner.node.sourceUrl &&
            <Images
              imageurl={pageData.aboutUs.approchBanner.node.sourceUrl && pageData.aboutUs.approchBanner.node.sourceUrl}
              styles={''}
              quality={80}
              width={'250'}
              height={'250'}
              alt={pageData.aboutUs.approchBanner.node.altText && pageData.aboutUs.approchBanner.node.altText}
              placeholder={false}
              classes={'filter grayscale opacity-20 mt-10 w-full xl:hidden block'}
            />
          }
          {pageData.aboutUs.approchBanner.node.sourceUrl && <div className="wrpr-3"><div className="inner"><AnimatedImage transalateY={'-500px'} src={pageData.aboutUs.approchBanner.node.sourceUrl} width="400" height="400" alt={pageData.aboutUs.approchBanner.node.altText} classes='app-banner' /></div></div>}
          <BlurAnimation position="bottom left" />
        </section>
        <section className="about-section-4 ">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up">{pageData.aboutUs.aboutBottomHeading && pageData.aboutUs.aboutBottomHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="content" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutBottomDescription && pageData.aboutUs.aboutBottomDescription }} />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section-5">
          <div className="container">
            <div className="wrpr ">
              <div className="inner ">
                <h2 data-aos="fade-up">{pageData.aboutUs.coreValuesHeading && pageData.aboutUs.coreValuesHeading}</h2>
                <p data-aos="fade-up">{pageData.aboutUs.coreValuesDescription && pageData.aboutUs.coreValuesDescription}</p>
              </div>
              <div className="wrpr-2 ">
                <div className="inner">
                  {_coreValues && _coreValues.map((item, key) => {
                    return (
                      <div key={key} data-aos="fade-up" className="wrpr-3 equal-round bg-gradient-2">
                        <p>
                          {item.title}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom right" />
        </section>
        <section className="section-about-7">
          <div className="container">
            <div className="inner">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up">{pageData.aboutUs.deliveryMethodHeading && pageData.aboutUs.deliveryMethodHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="inner-2" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.deliveryMethodDescription && pageData.aboutUs.deliveryMethodDescription }} />
              </div>
            </div>
          </div>
        </section>
        <section className="section-about-8">
          <div className="container">
            <div className="inner">
              <div>
                <div className="inner-2">
                  {_deliveryMethod && _deliveryMethod.map((item, key) => {
                    return (
                      <div key={key} data-aos="fade-up" className="inner-3">
                        <span className="bg-gradient-2">{key + 1}</span>
                        <div className="wrpr ">
                          <h3>
                            {item.title}
                          </h3>
                          <div className="sm:text-[1.2rem]" dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>
        <section className="section-about-9 ">
          <div className="container">
            <div className="inner-1">
              <div className="inner-2">
                <h2 data-aos="fade-up">{pageData.aboutUs.teamHeading && pageData.aboutUs.teamHeading}​</h2>
              </div>
              <div className="inner-3">
                <div className="inner-4">

                  {_teamsData && _teamsData.map((team, key) => {
                    return (
                      <div key={key} className="pt-20" data-aos="fade-up">
                        <AnimatedImage transalateY={'-100px'} src={team.featuredImage.node.sourceUrl} width="500" height="500" alt={team.featuredImage.node.altText} classes='max-w-96 max-h-96 w-96 h-96 object-cover rounded-full object-top aboslute -left-80 top-72 filter grayscale opacity-20 sm:block hidden' />
                        <div className="inner-5">
                          <div className="inner-6">
                            <Images
                              imageurl={team.featuredImage.node.sourceUrl}
                              styles={''}
                              quality={80}
                              width={'250'}
                              height={'250'}
                              alt={team.featuredImage.node.altText}
                              placeholder={false}
                              classes={'max-w-60 max-h-60 w-60 h-60 object-cover rounded-full object-top filter grayscale opacity-20 sm:hidden block w-full'}

                            />
                            <div>
                              <h3>{team.title}</h3>
                              <p>{team.teamAcf.position}</p>
                            </div>
                          </div>
                          <div className="inner-7">
                            <div className="sm:text-[1.2rem]" dangerouslySetInnerHTML={{ __html: team.content }} />
                            <ul className="inner-8">
                              {team.teamAcf.intrested.split('/').map((item, key) => {
                                return (
                                  <li key={key}>{item}</li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>

      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {

  try {

    //ABOUT PAGE DATA
    const aboutData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
          pages(where: {id:798}) {
      nodes{
        title
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
        pages{
          subHeading
        }
     aboutUs{
    aboutDescription1
      aboutDescription2
      journeyHeading
      timeline
      approchHeading
      approachContent
      approchBanner{
        node{
          sourceUrl
          altText
        }
      }
      aboutBottomHeading
      aboutBottomDescription
      coreValuesHeading
      coreValuesDescription
      deliveryMethodHeading
      deliveryMethodDescription
      teamHeading
      
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
    const aboutPageData = await aboutData.json();



    //CORE VALUES DATA
    const coreValues = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
          allCoreValues{
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
    const coreValuesData = await coreValues.json();


    //DELIVERY METHOD DATA
    const deliveryMethod = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              allDeliveryMethod{
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
    const deliveryMethodData = await deliveryMethod.json();


    //TEAMS DATA
    const teams = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              teams(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                 teamAcf{
                  position
                  intrested
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
    const teamsData = await teams.json();


    //TIMELINE DATA
    const timline = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              allTimeLine(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
               timeLineAcf{
                website
                year
                soon
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
    const timelineData = await timline.json();


    return {
      props: {
        aboutPageData,
        coreValuesData,
        deliveryMethodData,
        teamsData,
        timelineData
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


