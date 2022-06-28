import React from "react";
import { AgoraVideoPlayer, createClient, createScreenVideoTrack } from "agora-rtc-react";

const config = {mode: "rtc", codec: "vp8"}

const useClient = createClient(config);
const useScreenVideoTracks = createScreenVideoTrack();

export default function AgoraScreenShare() {
    const client = useClient();
    const { ready, tracks } = useScreenVideoTracks();

    return (
        ready && <AgoraVideoPlayer videoTrack={tracks[0]} style={{height: '100%', width: '100%'}} />
    )
}