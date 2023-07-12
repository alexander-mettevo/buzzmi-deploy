import Gallery from "../../../../reusable/gallary/Gallery.jsx"
import VideoGallery from "../../../../reusable/videoGallery/VideoGallery.jsx"
import AudioPlayer from "../../../../reusable/audioPlayer/AudioPlayer.jsx"

const HubMediaInvert = ({ galleryList, videoSrcLink, audioSrcLink, title }) => {
  if (!audioSrcLink && !!videoSrcLink) {
    return (
      <div className="hub__holder hub-media hub-media__without-audio">
        <Gallery list={galleryList} isSmall />

        <div className="hub__media">
          <div className="hub__video mb-3">
            <VideoGallery title={title} src={videoSrcLink} />
          </div>
        </div>
      </div>
    )
  }

  if (!videoSrcLink && !!galleryList) {
    return (
      <div className="hub__holder hub-media hub-media__without-video">
        {galleryList && <Gallery list={galleryList} isSmall />}
        {audioSrcLink && (
          <div className="hub__audio">
            <AudioPlayer src={audioSrcLink} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="hub__holder hub-media">
      <div className="hub__media">
        {videoSrcLink && (
          <div className="hub__video mb-3">
            <VideoGallery title={title} src={videoSrcLink} />
          </div>
        )}
        {galleryList && <Gallery list={galleryList} isSmall />}
        {audioSrcLink && (
          <div className="hub__audio">
            <AudioPlayer src={audioSrcLink} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HubMediaInvert
