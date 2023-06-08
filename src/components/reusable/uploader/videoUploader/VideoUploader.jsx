import React, {useEffect, useRef, useState} from 'react';
import MediaWrapper from "../../assets/mediaWrapper/MediaWrapper.jsx";
import VideoPlayer from "../../videoPlayer/VideoPlayer.jsx";


const VideoUploader = ({setValue, defaultValue = ''}) => {
  const [video, setVideo] = useState(defaultValue);
  const ref = useRef(null);
  const playerRef = useRef(null);
  const maxSize = 500 * 1024 * 1024;
  const maxDuration = 90 * 60 * 1000;

  const onChange = (event) => {
    let file = event.target.files[0];
    setValue('video', file);
    setVideo(URL.createObjectURL(file));
  }

  // useEffect(() => {
  //   //add listener to video duration
  //   if (playerRef.current) {
  //     playerRef.current.addEventListener('loadedmetadata', () => {
  //       if (playerRef.current.duration > maxDuration) {
  //         setVideo(null);
  //         setValue('video', null);
  //       }
  //     })
  //   }
  //
  //   return () => {
  //     if (playerRef.current) {
  //       playerRef.current.removeEventListener('loadedmetadata', () => {
  //       })
  //     }
  //   }
  // }, [video])

  const uploadVideo = () => {
    ref.current.click();
  }

  const removeVideo = () => {
    setVideo(null);
    setValue('video', null);
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <ul className='text-r'>
          <li> Max Size: 500 MB</li>
          <li> Maximum length: 90 Min</li>
          <li> Resolution: 1080p</li>
        </ul>

        <MediaWrapper onClick={uploadVideo} iconSrc="/images/assets/forms/video.svg"/>
      </div>


      <input size={maxSize} accept="video/*" className='d-none' onChange={onChange} type='file'
             ref={ref}/>
      {
        video &&
        <div className='video-uploader__player'>
          <VideoPlayer url={video}/>
          <button className='picture-uploader__delete' onClick={removeVideo}>
            <img src="/images/assets/delete.svg" alt="delete"/>
          </button>
        </div>

      }

    </>
  );
};

export default VideoUploader;