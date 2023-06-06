import React, {useEffect, useRef, useState} from 'react';
import MediaWrapper from "../../assets/mediaWrapper/MediaWrapper.jsx";
import {useAudioRecorder} from 'react-audio-voice-recorder';

const maxSize = 500 * 1024 * 1024;
const maxDuration = 90 * 60 * 1000;

const AudioUploader = () => {
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
  }

  useEffect(() => {
    if (!!recordingBlob) {
      setAudio(recordingBlob);
    }
  }, [recordingBlob])

  useEffect(() => {
    if (!!audio) {
      playerRef.current.src = URL.createObjectURL(audio)
    }
  }, [audio])

  useEffect(() => {
    //add listener to video duration
    if (playerRef.current) {
      playerRef.current.addEventListener('loadedmetadata', () => {
        if (isFinite(playerRef.current.duration) && playerRef.current.duration > maxDuration) {
          setAudio(null);
        } else if (audio?.size > maxSize) {
          setAudio(null);
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

  console.log('recordingTime', playerRef.current?.duration, maxDuration)

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
          <audio ref={playerRef} controls/>
          <button className='picture-uploader__delete audio-uploader__delete' onClick={removeAudio}>
            <img src="/images/assets/delete.svg" alt="delete"/>
          </button>
        </div>

      }
    </>
  );
};

export default AudioUploader;