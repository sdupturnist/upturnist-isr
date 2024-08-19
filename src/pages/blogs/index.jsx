import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import Link from "next/link"
import BlurAnimation from "@/components/BlurAnimation";
import { AOSInit } from "@/components/Aos";
import Images from "@/components/Images";
import PageHeading from "@/components/PageHeading";
import TruncatedText from "@/components/TruncateWords";
const { htmlToText } = require('html-to-text');


export default function Blogs({ blogPageDatas, getAllBlogsData }) {


    const pageData = blogPageDatas.data.pages.nodes[0]
    const allBlogs = getAllBlogsData.data.allBlogs.nodes


 
    const cleanHTML = (htmlString) => {
        return htmlToText(htmlString, {
          wordwrap: false,
        });
      };

    return (
        <>
            <Metatags data={blogPageDatas} />
            <Layout>
                <AOSInit />
                <PageHeading heading={pageData.title && pageData.title} subHeading={pageData.pages.subHeading && pageData.pages.subHeading} />
                <section className="all-blogs">
                    <div className="container">
                        <div className="inner">
                            <div className="wrpr">
                                {allBlogs && allBlogs.map((blog, key) => {



                                    return (<Link title={`Read blog: ${blog.title}`} href={`${frontendUrl}/blogs/${blog.slug}/`}  key={key}>
                                        {blog.featuredImage && <Images
                                            imageurl={blog.featuredImage.node.sourceUrl}
                                            styles={''}
                                            quality={100}
                                            width={'500'}
                                            height={'500'}
                                            alt={blog.featuredImage.node.altText}
                                            placeholder={true}
                                            classes={'rounded-3xl w-full block transform hover:scale-105 duration-500 ease-in-out filter grayscale opacity-50 hover:opacity-80 hover:grayscale-0'}
                                        />
                                        }
                                        <h2>{blog.title}</h2>
                                         <p><TruncatedText text={blog && cleanHTML(blog.content)} maxLength={400} /></p> 
                                      </Link>)
                                })}
                            </div>
                        </div>
                    </div>
                    <BlurAnimation position="top right" />
                </section>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {

    try {

        //BLOG PAGE DATA
        const blogPageData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
            pages(where: {id:839}) {
              nodes{
                title
                 pages{
                    subHeading
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
        const blogPageDatas = await blogPageData.json();



        //BLOG PAGE DATA
        const blogsData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
           allBlogs( first: 100 where: {orderby: {order: DESC, field: DATE}}){
              nodes{
                title
                content
                slug
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
        const getAllBlogsData = await blogsData.json();

        return {
            props: {
                blogPageDatas,
                getAllBlogsData
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}


