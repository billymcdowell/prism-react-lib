export type SourceProps = {
    href: string;
    children: React.ReactNode;
};
export declare function Source({ href, children }: SourceProps): import("react/jsx-runtime").JSX.Element;
export type SourceTriggerProps = {
    label?: string | number;
    showFavicon?: boolean;
    className?: string;
};
export declare function SourceTrigger({ label, showFavicon, className, }: SourceTriggerProps): import("react/jsx-runtime").JSX.Element;
export type SourceContentProps = {
    title: string;
    description: string;
    className?: string;
};
export declare function SourceContent({ title, description, className, }: SourceContentProps): import("react/jsx-runtime").JSX.Element;
