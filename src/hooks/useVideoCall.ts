import { useEffect, useState } from "react";
import AgoraRTC, {
  IAgoraRTCClient,
  IRemoteVideoTrack,
  ILocalVideoTrack,
  ILocalAudioTrack,
  IAgoraRTCRemoteUser,
} from "agora-rtc-sdk-ng";
import { useRouter } from "next/navigation";

interface VideoCallProps {
  appId: string;
  channel: string;
  certificate: string;
  token: string;
}

interface UseVideoCallReturn {
  client: IAgoraRTCClient | null;
  localTracks: [ILocalAudioTrack?, ILocalVideoTrack?];
  remoteUsers: IAgoraRTCRemoteUser[];
  error: string | null;
}

const useVideoCall = ({
  appId,
  channel,
  certificate,
  token,
}: VideoCallProps): UseVideoCallReturn => {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const [localTracks, setLocalTracks] = useState<
    [ILocalAudioTrack?, ILocalVideoTrack?]
  >([]);
  const [remoteUsers, setRemoteUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initClient = async () => {
      try {
        console.log("Initializing client with appId:", appId);

        const newClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        setClient(newClient);

        newClient.on("user-published", async (user, mediaType) => {
          console.log("User published:", user, mediaType);
          await newClient.subscribe(user, mediaType);
          if (mediaType === "video") {
            setRemoteUsers((prevUsers) => {
              if (!prevUsers.some((remoteUser) => remoteUser.uid === user.uid)) {
                return [...prevUsers, user];
              }
              return prevUsers;
            });
          }
          if (mediaType === "audio") {
            user.audioTrack?.play();
          }
        });

        newClient.on("user-unpublished", (user) => {
          console.log("User unpublished:", user);
          setRemoteUsers((prevUsers) =>
            prevUsers.filter((remoteUser) => remoteUser.uid !== user.uid)
          );
        });

        const uid = await newClient.join(appId, channel, token, null);
        console.log("Local user UID:", uid);

        const [audioTrack, videoTrack] =
          await AgoraRTC.createMicrophoneAndCameraTracks();
        setLocalTracks([audioTrack, videoTrack]);
        await newClient.publish([audioTrack, videoTrack]);
      } catch (error) {
        console.error("Error initializing client:", error);
        setError("Erro ao iniciar chamada: " + (error as Error).message);
      }
    };

    initClient();

    const timeoutId = setTimeout(() => {
      if (client) {
        client.leave();
      }
      router.push("/home");
    }, 60 * 60 * 1000); // 60 minutos em milissegundos

    return () => {
      clearTimeout(timeoutId);
      if (client) {
        client.leave();
      }
      localTracks.forEach((track) => track?.close());
    };
  }, [appId, channel]);

  return { client, localTracks, remoteUsers, error };
};

export default useVideoCall;
