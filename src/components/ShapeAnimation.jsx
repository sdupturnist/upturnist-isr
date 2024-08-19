import Images from '@/components/Images';


export default function ShapeAnimation({large}) {
    return (
        <>
  <div className={`${!large ? "block sm:hidden" : 'large'} shape-animation-wrpr`}>


  <video
                      className="absolute top-0 left-0 right-0 bottom-0 opacity-10 grayscale w-full h-screen video-animation"
                          src={'/videos/video-pageheader.mp4'}
                      muted
                      autoPlay={"autoplay"}
                      preload="none"
                      loop>
                      video tag is not supported by your browser
                    </video> 

            
            </div>
        </>
    )
}
