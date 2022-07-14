import { ReactElement, createElement } from "react";
import { WebRTCTest } from "./components/WebRTCTest";

import { WebRTCWidgetContainerProps } from "../typings/WebRTCWidgetProps";

import "./ui/WebRTCWidget.css";

export function WebRTCWidget({ sampleText }: WebRTCWidgetContainerProps): ReactElement {
    return <WebRTCTest sampleText={sampleText ? sampleText : "World"} />;
}
