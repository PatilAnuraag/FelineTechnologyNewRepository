import { useState } from 'react';
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

export default function AudioRecorder() {
  const [audioDetails, setAudioDetails] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  });

  const handleAudioStop = (data) => {
    console.log(data);
    setAudioDetails(data);
  };

  const handleAudioUpload = (file) => {
    console.log(file);
  };

  const handleCountDown = (data) => {
    console.log(data);
  };

  const handleReset = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    setAudioDetails(reset);
  }

  return(
    <div style={{backgroundColor: "#1B1A17", height: "100vh"}}>
    <Recorder
    record={true}
    title={"New recording"}
    audioURL={audioDetails.url}
    showUIAudio
    handleAudioStop={data => handleAudioStop(data)}
    handleAudioUpload={data => handleAudioUpload(data)}
    handleCountDown={data => handleCountDown(data)}
    handleReset={() => handleReset()}
    mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
    />
    </div>
  )
}
