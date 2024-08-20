import Images from '@/components/Images';


export default function ShapeAnimation({ large }) {
    return (
        <>
            <div className={`${!large ? "block sm:hidden" : 'large'} shape-animation-wrpr`}>


                <video
                    className=""
                    src={'/videos/video2.mp4'}
                    muted
                    autoPlay={"autoplay"}
                    preload="none"
                    loop
                    playsinline
                >
                    video tag is not supported by your browser
                </video>


            </div>
        </>
    )
}
