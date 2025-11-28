import { default as React } from '../../../node_modules/react';
export type ReasoningProps = {
    children: React.ReactNode;
    className?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    isStreaming?: boolean;
};
declare function Reasoning({ children, className, open, onOpenChange, isStreaming, }: ReasoningProps): import("react/jsx-runtime").JSX.Element;
export type ReasoningTriggerProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;
declare function ReasoningTrigger({ children, className, ...props }: ReasoningTriggerProps): import("react/jsx-runtime").JSX.Element;
export type ReasoningContentProps = {
    children: React.ReactNode;
    className?: string;
    markdown?: boolean;
    contentClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare function ReasoningContent({ children, className, contentClassName, markdown, ...props }: ReasoningContentProps): import("react/jsx-runtime").JSX.Element;
export { Reasoning, ReasoningTrigger, ReasoningContent };
