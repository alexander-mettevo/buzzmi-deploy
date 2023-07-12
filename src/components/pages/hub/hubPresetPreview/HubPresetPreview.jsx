import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx"
import Gallery from "../../../reusable/gallary/Gallery.jsx"
import AudioPlayer from "../../../reusable/audioPlayer/AudioPlayer.jsx"
import VideoGallery from "../../../reusable/videoGallery/VideoGallery.jsx"
import { useParams } from "react-router-dom"

// mock data
import { infoCardData, tasksData } from "../../../../mock-data/hub/hub.js"
import { galleryList, videoSrcLink } from "../../../../mock-data/gallery/gallery.js"
import SmallCardDispatcher from "../../../reusable/cards/smallCard/SmallCardDispatcher.jsx"
import Description from "../../../reusable/assets/description/Description.jsx"

const HubPresetPreview = () => {
  const { id } = useParams()

  return (
    <div className="hub">
      <div className="hub__content">
        <BackBtnWithTitlePage
          title="Energetic Morning"
          btnText="Cancel"
          lastItemLink={{
            href: `/hub/edit-preset/${id}`,
            title: "Edit",
          }}
        />

        <div className="mb-4">
          <Description item={infoCardData} />
        </div>
        <div className="hub__holder">
          <Gallery list={galleryList} isSmall />
          <div className="hub__media">
            <div className="hub__video mb-3">
              <VideoGallery title="Energetic Morning" src={videoSrcLink} />
            </div>
            <div className="hub__audio">
              <AudioPlayer src="/sounds/test-track.mp3" />
            </div>
          </div>
        </div>
        <div className="present-preview__cards">
          <h2 className="h4 mb-2">Tasks</h2>
          <SmallCardDispatcher list={tasksData} dnd={true} />
        </div>
      </div>
    </div>
  )
}

export default HubPresetPreview
