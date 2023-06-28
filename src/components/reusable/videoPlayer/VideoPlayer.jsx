import { useDispatch } from "react-redux"
import { Player, ControlBar, ClosedCaptionButton, FullscreenToggle } from "video-react"
import { openModal } from "../../../store/slices/modalSlice/modalSlice"
import useWindowSize from "../../../hooks/useWindowSize"
import { useRef } from "react"

const VideoPlayer = ({ url, title = "", tracks = [] }) => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const ref = useRef(null)
  const handleAction = (player) => {
    const modalTitle = !!title ? title + " Video Description" : "Video Description"

    ref.current.actions.pause()
    dispatch(
      openModal({
        modalName: "VideoModal",
        modalProps: { url: player.currentSrc, tracks, title },
        modalType: "video",
        modalTitle,
      }),
    )
  }

  return (
    <Player fluid={false} width="100%" height="100%" ref={ref}>
      <source src={url} />

      {tracks.length > 0 &&
        tracks?.map((track, index) => (
          <track kind="captions" src={track.src} srcLang={track.lang} label={track.label} key={index + "video"} />
        ))}
      <ControlBar autoHide={false}>
        <ClosedCaptionButton order={7} />
        {width > 992 && (
          <FullscreenToggle
            actions={{
              order: 8,
              toggleFullscreen: handleAction,
            }}
          />
        )}
      </ControlBar>
    </Player>
  )
}

export default VideoPlayer
