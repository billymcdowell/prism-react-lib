export type TextShimmerProps = {
    as?: string;
    duration?: number;
    spread?: number;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
export declare function TextShimmer({ as, className, duration, spread, children, ...props }: TextShimmerProps): import("react/jsx-runtime").JSX.Element;
