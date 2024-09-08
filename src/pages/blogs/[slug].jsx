import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import Link from "next/link";
import MetatagsBlogSingle from "@/components/SeoBlogSingle";
import TruncatedText from "@/components/TruncateWords";
import { useEffect } from "react";
import { useRouter } from "next/router";
const { htmlToText } = require('html-to-text');


export default function BlogSingle({ singleBLogsData, blogSinglePageData, getAllBlogsData }) {

  const router = useRouter();



  const singleBlog = singleBLogsData?.data?.allBlogs?.nodes[0] ?? null;
  const allBlogs = getAllBlogsData?.data?.allBlogs?.nodes ?? null;

  function formatBlogDate(date_) {
    const originalDate = new Date(date_);
    return originalDate.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
  }

  const cleanHTML = (htmlString) => {
    return htmlToText(htmlString, {
      wordwrap: false,
    });
  };

  

    // useEffect(() => {
    // if(!singleBlog) {
    //     router.push('/404');
    //   }
      
    // }, [singleBlog])
    

      useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!singleBlog) {
        router.push('/404');
      }
    }, 1000); // Delay in milliseconds (e.g., 1000ms = 1 second)

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [singleBlog, router]);

    

  return (
    <>
      {singleBlog && (
        <>
          <MetatagsBlogSingle data={[singleBLogsData]} />
          <Layout>
            <AOSInit />
            <section className="blog-single-">
              <div className="container">
                <div className="inner">
                  <div className="inner-2">
                    <h1 data-aos="fade-up">{singleBlog.title}​</h1>
                    <div data-aos="fade-up">
                      <Images
                        imageurl={singleBlog.featuredImage?.node?.sourceUrl || 'sample-link'}
                        styles={''}
                        quality={100}
                        width={'1000'}
                        height={'500'}
                        alt={singleBlog.featuredImage?.node?.altText || 'no alt'}
                        title={singleBlog.featuredImage?.node?.altText || 'no alt'}
                        placeholder={true}
                        classes={'w-full block'}
                      />
                    </div>
                    <div data-aos="fade-up" className="blog-content" dangerouslySetInnerHTML={{ __html: singleBlog.content }} />
                    <p className="text-[24px]">{formatBlogDate(singleBlog.date)}</p>
                    <div className="inner-3">
                      <h3 data-aos="fade-up">More blogs</h3>
                      <div className="inner-4">
                        {allBlogs && allBlogs.filter(post => post.slug !== singleBlog.slug).map((blog, key) => (
                          <Link
                            key={key}
                            title={`Read blog: ${blog.title}`}
                            aria-label={`Read blog: ${blog.title}`}
                            href={`${frontendUrl}/blogs/${blog.slug}/`}
                            data-aos="fade-up"
                            className="grid gap-5 block"
                          >
                            {blog.featuredImage && <Images
                              imageurl={blog.featuredImage.node.sourceUrl}
                              styles={''}
                              quality={100}
                              width={'500'}
                              height={'500'}
                              alt={blog.featuredImage.node.altText}
                              title={blog.featuredImage.node.altText}
                              placeholder={false}
                              classes={'rounded-3xl w-full block transform duration-500 ease-in-out filter grayscale opacity-50 hover:opacity-80 hover:grayscale-0'}
                            />}
                            <h2>{blog.title}</h2>
                            <p><TruncatedText text={cleanHTML(blog.content)} maxLength={400} /></p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlurAnimation position="top right" />
            </section>
          </Layout>
        </>
      )}
    </>
  );
}



export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  try {
    // Fetch the blog data based on slug
    const blogData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          allBlogs(where: {name: "${slug}"}) {
            nodes {
              title
              date
              content
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
        }`,
      }),
    });
    const singleBLogsData = await blogData.json();

    // Check if the blog data exists, otherwise return notFound
    // if (!singleBLogsData?.data?.allBlogs?.nodes.length) {
    //   return {
    //     notFound: true,
    //   };
    // }

    // Fetch the static page data
    const pageData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          pages(where: {id: 839}) {
            nodes {
              title
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              seo {
                canonical
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
        }`,
      }),
    });
    const blogSinglePageData = await pageData.json();

    // Fetch all blogs for the "More blogs" section
    const blogsData = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
          allBlogs(first: 4) {
            nodes {
              title
              content
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }`,
      }),
    });
    const getAllBlogsData = await blogsData.json();

    return {
      props: {
        singleBLogsData,
        blogSinglePageData,
        getAllBlogsData
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    // Fetch all blog slugs
    const res = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          allBlogs {
            nodes {
              slug
            }
          }
        }`,
      }),
    });

    const data = await res.json();
    const allBlogs = data?.data?.allBlogs?.nodes ?? [];

    // Map slugs to paths
    const paths = allBlogs.map(blog => ({
      params: { slug: blog.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // or 'false' to generate pages at build time
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}
