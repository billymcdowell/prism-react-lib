export type ChatContainerRootProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export type ChatContainerContentProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export type ChatContainerScrollAnchorProps = {
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;
declare function ChatContainerRoot({ children, className, ...props }: ChatContainerRootProps): import("react/jsx-runtime").JSX.Element;
declare function ChatContainerContent({ children, className, ...props }: ChatContainerContentProps): import("react/jsx-runtime").JSX.Element;
declare function ChatContainerScrollAnchor({ className, ...props }: ChatContainerScrollAnchorProps): import("react/jsx-runtime").JSX.Element;
export { ChatContainerRoot, ChatContainerContent, ChatContainerScrollAnchor };
