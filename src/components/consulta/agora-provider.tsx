'use client'

import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import LiveVideo from "@/components/consulta/livevideo";

export function AgoraProvider() {
  const agoraClient = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));

  return (
    <>
      <AgoraRTCProvider client={agoraClient}>
        <LiveVideo />
      </AgoraRTCProvider>
    </>
  );
}
