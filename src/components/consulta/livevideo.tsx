import { useState, useEffect, useRef, useCallback } from "react";
import {
  LocalUser,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteAudioTracks,
  useRemoteUsers,
  IRemoteVideoTrack,
} from "agora-rtc-react";
import { PUBLIC_AGORA_APP_ID } from "@/utils/agoraIoAppId";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaTimes,
} from "react-icons/fa";

export default function LiveVideo() {
  const appId = PUBLIC_AGORA_APP_ID.appId;
  const channelName = PUBLIC_AGORA_APP_ID.channel; // Use diretamente o channelName

  // Set the connection state
  const [activeConnection, setActiveConnection] = useState(true);

  // Track the mic/video state - Turn on Mic and Camera On
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);

  // Get local video and mic tracks
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  // Remote users
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  const localVideoRef = useRef<HTMLDivElement>(null);

  // Join the channel
  useJoin(
    {
      appid: appId,
      channel: channelName,
      token: PUBLIC_AGORA_APP_ID.token,
    },
    activeConnection
  );

  usePublish([localMicrophoneTrack, localCameraTrack]);

  // Play the remote user audio tracks
  useEffect(() => {
    audioTracks.forEach((track) => track.play());
  }, [audioTracks]);

  useEffect(() => {
    if (localCameraTrack && localVideoRef.current) {
      localCameraTrack.play(localVideoRef.current);
    }
  }, [localCameraTrack]);

  // Function to handle the playing of remote video tracks
  const playRemoteVideo = useCallback(
    (track: IRemoteVideoTrack, el: HTMLDivElement | null) => {
      if (track && el) {
        track.play(el);
      }
    },
    []
  );

  return (
    <>
      <div id="remoteVideoGrid">
        {
          // Initialize each remote stream using RemoteUser component
          remoteUsers.map((user) => (
            <div
              key={user.uid}
              className="remote-video-container"
              style={{ width: "640px", height: "480px" }}
            >
              {user.videoTrack && (
                <div
                  ref={(el) => {
                    if (el) playRemoteVideo(user.videoTrack!, el);
                  }}
                />
              )}
              <RemoteUser user={user} />
            </div>
          ))
        }
      </div>
      <div
        id="localVideo"
        ref={localVideoRef}
        style={{ width: "640px", height: "480px" }}
      >
        <LocalUser
          audioTrack={localMicrophoneTrack}
          videoTrack={localCameraTrack}
          cameraOn={cameraOn}
          micOn={micOn}
          playAudio={micOn}
          playVideo={cameraOn}
          className=""
        />
        <div>
          {/* Media-controls toolbar component - UI controlling mic, camera, & connection state */}
          <div
            id="controlsToolbar"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <button
              className="btn"
              onClick={() => setMic((a) => !a)}
              style={{ color: micOn ? "green" : "red" }}
            >
              {micOn ? (
                <FaMicrophone size={30} />
              ) : (
                <FaMicrophoneSlash size={30} />
              )}
            </button>
            <button
              className="btn"
              onClick={() => setCamera((a) => !a)}
              style={{ color: cameraOn ? "green" : "red" }}
            >
              {cameraOn ? <FaVideo size={30} /> : <FaVideoSlash size={30} />}
            </button>
            <button
              id="endConnection"
              onClick={() => {
                setActiveConnection(false);
                // Implemente a lógica de navegação aqui, USANDO HRF /home
                window.location.href = "/home";
              }}
              style={{ color: "red" }}
            >
              <FaTimes size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
