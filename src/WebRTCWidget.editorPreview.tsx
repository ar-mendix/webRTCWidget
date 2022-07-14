import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { WebRTCWidgetPreviewProps } from "../typings/WebRTCWidgetProps";

export function preview({ sampleText }: WebRTCWidgetPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/WebRTCWidget.css");
}
