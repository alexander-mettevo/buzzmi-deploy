import React, {useState} from "react";
import LightBox from "../../lightBox/LightBox.jsx";
import VideoPlayer from "../videoPlayer/VideoPlayer.jsx";

const tracks = [
    {
        kind: "descriptions",
        src: "/video/descriptions.en.vtt",
        srcLang: "en",
        label: "English"
    },
    {
        kind: "descriptions",
        src: "/video/descriptions.en.vtt",
        srcLang: "en",
        label: "English2"
    }

]

const VideoGallery = ({src}) => {
    const [showVideoPlayer, setShowVideoPlayer] = useState(false)
    return(
        <div className="video-gallery">
            <div className="video-gallery__preview">
                <video src={src} className="video-gallery__preview-item"/>
                <button className="video-gallery__opener" onClick={() => setShowVideoPlayer(true)}/>
            </div>
            <LightBox isOpened={showVideoPlayer} onClose={() => setShowVideoPlayer(false)}>
                <div className="video-gallery__player-body">
                    <div className="video-gallery__player-holder">
                        <VideoPlayer url={src} tracks={tracks}/>
                    </div>
                </div>
            </LightBox>
        </div>
    )
}

export default VideoGallery;
