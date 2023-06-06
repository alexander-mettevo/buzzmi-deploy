import React from 'react';
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';

const VideoPlayer = ({url, tracks = []}) => {


  return (
    <Player fluid={false}  width='100%' height='100%'>
      <source src={url} />

      {
        tracks.length > 0 && tracks?.map((track, index) => (
          <track
            kind="captions"
            src={track.src}
            srcLang={track.lang}
            label={track.label}
            key={index + 'video'}
          />
        ))
      }
      <ControlBar autoHide={false}>
        <ClosedCaptionButton order={7} />
      </ControlBar>
    </Player>
  );
};

export default VideoPlayer;