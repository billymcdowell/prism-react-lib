export interface LoaderProps {
    variant?: "circular" | "classic" | "pulse" | "pulse-dot" | "dots" | "typing" | "wave" | "bars" | "terminal" | "text-blink" | "text-shimmer" | "loading-dots";
    size?: "sm" | "md" | "lg";
    text?: string;
    className?: string;
}
export declare function CircularLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function ClassicLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function PulseLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function PulseDotLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function DotsLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TypingLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function WaveLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function BarsLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TerminalLoader({ className, size, }: {
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TextBlinkLoader({ text, className, size, }: {
    text?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TextShimmerLoader({ text, className, size, }: {
    text?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TextDotsLoader({ className, text, size, }: {
    className?: string;
    text?: string;
    size?: "sm" | "md" | "lg";
}): import("react/jsx-runtime").JSX.Element;
declare function Loader({ variant, size, text, className, }: LoaderProps): import("react/jsx-runtime").JSX.Element;
export { Loader };
