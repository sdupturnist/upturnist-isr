import { useRef } from "react";
import videojs from "video.js";
import VideoJS from "./Video";

export default function ShapeAnimation({ large }) {
    const playerRef = useRef(null);

    const videoJsOptionsM3u8 = {
        controls: false,
        autoplay: true,
        fluid:true,
        muted: true,
        loop:true,
      
      sources: [
            {
                src: '/videos/video2.mp4',
            },
        ],
        plugins: {
            httpSourceSelector: {
                default: 'auto'
            }
        }
    };

   
    return (
        <>
            <div className={`${!large ? "block sm:hidden" : 'large'} shape-animation-wrpr`}>
                <VideoJS options={videoJsOptionsM3u8}  />
            </div>
        </>
    );
}
