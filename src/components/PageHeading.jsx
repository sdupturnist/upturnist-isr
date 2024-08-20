
import AnimatedTextCharacter from "./AnimatedText"
import Loading from "@/components/Loading";
import dynamic from 'next/dynamic';


export default function PageHeading({ heading, subHeading }) {

 

  const BlurAnimation = dynamic(() => import('../components/BlurAnimation'), {
    loading: () => <Loading />,
    ssr: false,
  });


  const ShapeAnimation = dynamic(() => import('../components/ShapeAnimation'), {
    loading: () => <Loading />,
    ssr: false,
  });


  const BackgroundAnimation = dynamic(() => import('../components/BackgroundAnimation'), {
    loading: () => <Loading />,
    ssr: false,
  });



  return (<>

<section className="hero lg:h-screen flex items-center sm:py-20 py-6 overflow-hidden relative   sm:mt-[-100px]">
     <div className="hidden sm:block">
     <BlurAnimation position="bottom left" />
     </div>
      <div className="container z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="sm:order-1 order-2 flex items-center ]">
          <div className="grid gap-[40px]">
          <h1 className="lg:text-[4rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
              <AnimatedTextCharacter text={heading && heading} />
            </h1>
            <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{subHeading && subHeading}</p>
          </div>
          </div>
          <div className="items-center sm:order-2 order-1">
           <div>
           <ShapeAnimation large />
           </div>
          </div>
        </div>
      </div>
      {/* <BackgroundAnimation /> */}
    </section>

{/*     
    <section style={{ marginTop: '-120px' }} className="hero lg:h-screen h-[80vh] flex items-center  sm:py-20 pt-[100px] pb-[24px] py-6 overflow-hidden relative text-center">
      <div className="container z-10 relative">
        <div className="grid  gap-8">
          <div className="items-center grid gap-7 sm:order-1 order-2">
            <h1 className="lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
              <AnimatedTextCharacter text={heading && heading} />
            </h1>
            <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{subHeading && subHeading}</p>
          </div>
        </div>
      </div>
      <ShapeAnimation large />
    </section> */}
  </>)
}