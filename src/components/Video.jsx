export default function VideoHome({url}){
    return(
        <>
         <video
                      className="video-offer"
                      src={url}
                      controls
                      muted
                      autoPlay={"autoplay"}
                      preload="none"
                      loop>
                      video tag is not supported by your browser
                    </video>
        </>
    )
}