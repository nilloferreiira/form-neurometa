"use client";
import { useState, useEffect } from "react";
import { Main } from "@/components/main/main";
import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import LiveVideo from "@/components/consulta/livevideo";

export default function Consulta() {
  const agoraClient = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));

  return (
    <Main>
      <div className="chamada w-full h-full flex flex-row gap-4 items-center justify-center">
        <AgoraRTCProvider client={agoraClient}>
          <LiveVideo />
        </AgoraRTCProvider>
      </div>
    </Main>
  );
}
