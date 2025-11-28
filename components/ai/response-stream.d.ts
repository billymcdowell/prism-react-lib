import { default as React } from '../../../node_modules/react';
export type Mode = "typewriter" | "fade";
export type UseTextStreamOptions = {
    textStream: string | AsyncIterable<string>;
    speed?: number;
    mode?: Mode;
    onComplete?: () => void;
    fadeDuration?: number;
    segmentDelay?: number;
    characterChunkSize?: number;
    onError?: (error: unknown) => void;
};
export type UseTextStreamResult = {
    displayedText: string;
    isComplete: boolean;
    segments: {
        text: string;
        index: number;
    }[];
    getFadeDuration: () => number;
    getSegmentDelay: () => number;
    reset: () => void;
    startStreaming: () => void;
    pause: () => void;
    resume: () => void;
};
declare function useTextStream({ textStream, speed, mode, onComplete, fadeDuration, segmentDelay, characterChunkSize, onError, }: UseTextStreamOptions): UseTextStreamResult;
export type ResponseStreamProps = {
    textStream: string | AsyncIterable<string>;
    mode?: Mode;
    speed?: number;
    className?: string;
    onComplete?: () => void;
    as?: keyof React.JSX.IntrinsicElements;
    fadeDuration?: number;
    segmentDelay?: number;
    characterChunkSize?: number;
};
declare function ResponseStream({ textStream, mode, speed, className, onComplete, as, fadeDuration, segmentDelay, characterChunkSize, }: ResponseStreamProps): import("react/jsx-runtime").JSX.Element;
export { useTextStream, ResponseStream };
