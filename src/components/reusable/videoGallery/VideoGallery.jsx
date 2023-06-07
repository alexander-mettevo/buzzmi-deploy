import React, {useEffect, useRef, useState} from "react";
import LightBox from "../../lightBox/LightBox.jsx";
import VideoPlayer from "../videoPlayer/VideoPlayer.jsx";
import moment from "moment";

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
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);
    const [duration, setDuration] = useState(null);
    const previewVideoRef = useRef(null);
    const getDuration = () => {
        const formatDuration = moment.utc(moment.duration(previewVideoRef.current.duration, 'seconds').asMilliseconds()).format('mm:ss')
        setDuration(formatDuration)
    }
    return(
        <div className="video-gallery">
            <div className="video-gallery__preview">
                <video src={src} className="video-gallery__preview-item" ref={previewVideoRef} onLoadedMetadata={getDuration}/>
                <button className="video-gallery__opener" onClick={() => setShowVideoPlayer(true)}/>
                {duration && <span className="video-gallery__duration">{duration}</span>}
            </div>
            <LightBox isOpened={showVideoPlayer} onClose={() => setShowVideoPlayer(false)}>
                <div className="video-gallery__player-body">
                    <div className="video-gallery__player-holder">
                        <VideoPlayer url={src} tracks={tracks} getDuration={val => console.log(val)}/>
                    </div>
                </div>
            </LightBox>
        </div>
    )
}

export default VideoGallery;
