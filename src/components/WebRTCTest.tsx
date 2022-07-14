import { ReactElement, createElement } from "react";

export interface WebRTCTestProps {
    sampleText?: string;
}

export function WebRTCTest({ sampleText }: WebRTCTestProps): ReactElement {
    return <div className="container">
    <div>Hello {sampleText}</div>
    My user id: <div id="userId"></div>
    Remote camera: <video id="remoteVideo" playsInline autoPlay></video>
    My camera: <video id="localVideo" playsInline autoPlay muted></video>
    
    <div id="usersList">
      No users connected
    </div>
    <button id="call">Call</button>
  </div>;
}
