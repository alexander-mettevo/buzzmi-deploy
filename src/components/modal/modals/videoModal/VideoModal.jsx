import { Player, ControlBar, ClosedCaptionButton, FullscreenToggle } from "video-react"

const VideoModal = ({ url, tracks }) => {
  return (
    <Player className="video-modal" fluid={false} width="100%" height="100%">
      <source src={url} />

      {tracks.length > 0 &&
        tracks?.map((track, index) => (
          <track kind="captions" src={track.src} srcLang={track.lang} label={track.label} key={index + "video"} />
        ))}
      <ControlBar autoHide={false}>
        <ClosedCaptionButton order={7} />
        <FullscreenToggle className="video-modal__fullscreen" />
      </ControlBar>
    </Player>
  )
}

export default VideoModal
