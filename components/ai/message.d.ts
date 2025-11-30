import { Tooltip } from '../ui/tooltip';
import { Markdown } from './markdown';
export type MessageProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLProps<HTMLDivElement>;
declare const Message: ({ children, className, ...props }: MessageProps) => import("react/jsx-runtime").JSX.Element;
export type MessageAvatarProps = {
    src: string;
    alt: string;
    fallback?: string;
    delayMs?: number;
    className?: string;
};
declare const MessageAvatar: ({ src, alt, fallback, delayMs, className, }: MessageAvatarProps) => import("react/jsx-runtime").JSX.Element;
export type MessageContentProps = Omit<React.ComponentProps<typeof Markdown>, "children"> & Omit<React.HTMLProps<HTMLDivElement>, "children"> & {
    children: React.ReactNode;
    markdown?: boolean;
};
declare const MessageContent: ({ children, markdown, className, ...props }: MessageContentProps) => import("react/jsx-runtime").JSX.Element;
export type MessageActionsProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLProps<HTMLDivElement>;
declare const MessageActions: ({ children, className, ...props }: MessageActionsProps) => import("react/jsx-runtime").JSX.Element;
export type MessageActionProps = {
    className?: string;
    tooltip: React.ReactNode;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
} & React.ComponentProps<typeof Tooltip>;
declare const MessageAction: ({ tooltip, children, className, side, ...props }: MessageActionProps) => import("react/jsx-runtime").JSX.Element;
export { Message, MessageAvatar, MessageContent, MessageActions, MessageAction };
