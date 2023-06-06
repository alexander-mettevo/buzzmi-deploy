import React, {useEffect, useRef, useState} from "react";

import WaveSurfer from 'wavesurfer.js';
import moment from "moment/moment.js";


const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: "#918b9c",
    progressColor: "#EF8FD5",
    cursorColor: "#EF8FD5",
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 30,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true
});

const AudioPlayer = ({src}) => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const timelineRef = useRef(null);
    const [playing, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (src) {
            setPlay(false);

            const options = formWaveSurferOptions(waveformRef.current);
            wavesurfer.current = WaveSurfer.create(options);

            wavesurfer.current.load(src);

            wavesurfer.current.on("ready", () => {
                if (wavesurfer.current) {
                    wavesurfer.current.setVolume(volume);
                    setVolume(volume);
                }
            });

            wavesurfer.current.on("timeupdate", (seconds) => {
                if (wavesurfer.current && timelineRef.current) {
                    const duration = moment.duration(seconds, 'seconds');
                    timelineRef.current.innerHTML = moment.utc(duration.asMilliseconds()).format('mm:ss');
                }
            });
        }

        return () => src ? wavesurfer.current.destroy() : null;
    }, [src]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    const onVolumeChange = ({target}) => {
        const newVolume = +target.value;

        if (newVolume) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume === undefined || 1);
        }
    };

    return src ? (
        <div className="audio-player">
            <button
                className={"audio-player__btn audio-player__btn--"}
                onClick={handlePlayPause}>
                {!playing ? <i className="fa-solid fa-play"/>: <i className="fa-solid fa-pause" />}
            </button>
            <div className="audio-player__wave" id="waveform" ref={waveformRef}/>
            <div className="audio-player__right">
                <span className="audio-player__timeline" ref={timelineRef}>00:00</span>
                <div className="audio-player__volume">
                    <button className="audio-player__volume-btn">
                        <i className="fa-solid fa-volume-high"></i>
                    </button>
                    <input
                        className="audio-player__volume-range"
                        type="range"
                        id="volume"
                        name="volume"
                        min="0.01"
                        max="1"
                        step=".025"
                        onChange={onVolumeChange}
                        defaultValue={volume}
                    />
                </div>
            </div>
        </div>
    ) : null;
}

export default AudioPlayer;

