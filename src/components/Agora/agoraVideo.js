import React from "react";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const config = {mode: "rtc", codec: "vp8"}

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export default function AgoraVideo() {
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();

    return (
        ready && <AgoraVideoPlayer videoTrack={tracks[1]} style={{height: '100%', width: '100%'}} />
    )
}