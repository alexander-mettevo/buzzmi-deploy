import React, {useEffect, useRef, useState} from 'react';
import MediaWrapper from "../../assets/mediaWrapper/MediaWrapper.jsx";
import {useAudioRecorder} from 'react-audio-voice-recorder';
import AudioPlayer from "../../audioPlayer/AudioPlayer.jsx";

const maxSize = 500 * 1024 * 1024;
const maxDuration = 90 * 60 * 1000;

const AudioUploader = ({setValue}) => {
  const [audio, setAudio] = useState();
  const playerRef = useRef(null);
  const [iconSrc, setIconSrc] = useState("/images/assets/forms/voice.svg");

  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
  } = useAudioRecorder();


  const recordAudio = () => {
    if (isRecording) {
      stopRecording();
      setIconSrc("/images/assets/forms/voice.svg")
    } else {
      startRecording();
      setIconSrc("/images/assets/forms/voice_r.svg")
    }
  }

  const removeAudio = () => {
    setAudio(null);
    setValue('audio', null);
  }

  useEffect(() => {
    if (!!recordingBlob) {
      setAudio(recordingBlob);
      setValue('audio', recordingBlob);
    }
  }, [recordingBlob])


  useEffect(() => {
    //add listener to video duration
    if (playerRef.current) {
      playerRef.current.addEventListener('loadedmetadata', () => {
        if (isFinite(playerRef.current.duration) && playerRef.current.duration > maxDuration) {
          setAudio(null);
          setValue('audio', null);
        } else if (audio?.size > maxSize) {
          setAudio(null);
          setValue('audio', null);
        }
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener('loadedmetadata', () => {
        })
      }
    }
  }, [audio])


  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <ul className='text-r'>
          <li> Max Size: 500 MB</li>
          <li> Maximum length: 90 Min</li>
        </ul>

        <MediaWrapper onClick={recordAudio} iconSrc={iconSrc}/>
      </div>

      {
        audio &&
        <div className='audio-uploader__player'>
          <AudioPlayer src={URL.createObjectURL(audio)}/>
          <button className='picture-uploader__delete audio-uploader__delete' onClick={removeAudio}>
            <img src="/images/assets/delete.svg" alt="delete"/>
          </button>
        </div>

      }
    </>
  );
};

export default AudioUploader;