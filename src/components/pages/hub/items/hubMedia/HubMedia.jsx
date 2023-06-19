import React from "react"
import Gallery from "../../../../reusable/gallary/Gallery.jsx"
import VideoGallery from "../../../../reusable/videoGallery/VideoGallery.jsx"
import AudioPlayer from "../../../../reusable/audioPlayer/AudioPlayer.jsx"

const HubMedia = ({ galleryList, videoSrcLink, audioSrcLink }) => {
  return (
    <div className="hub__holder">
      <Gallery list={galleryList} isSmall />
      <div className="hub__media">
        <div className="hub__video mb-3">
          <VideoGallery src={videoSrcLink} />
        </div>
        <div className="hub__audio">
          <AudioPlayer src={audioSrcLink} />
        </div>
      </div>
    </div>
  )
}

export default HubMedia
