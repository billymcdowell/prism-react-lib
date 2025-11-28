import { Textarea } from '../ui/textarea';
import { Tooltip } from '../ui/tooltip';
import { default as React } from '../../../node_modules/react';
export type PromptInputProps = {
    isLoading?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
    maxHeight?: number | string;
    onSubmit?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
} & React.ComponentProps<"div">;
declare function PromptInput({ className, isLoading, maxHeight, value, onValueChange, onSubmit, children, disabled, onClick, ...props }: PromptInputProps): import("react/jsx-runtime").JSX.Element;
export type PromptInputTextareaProps = {
    disableAutosize?: boolean;
} & React.ComponentProps<typeof Textarea>;
declare function PromptInputTextarea({ className, onKeyDown, disableAutosize, ...props }: PromptInputTextareaProps): import("react/jsx-runtime").JSX.Element;
export type PromptInputActionsProps = React.HTMLAttributes<HTMLDivElement>;
declare function PromptInputActions({ children, className, ...props }: PromptInputActionsProps): import("react/jsx-runtime").JSX.Element;
export type PromptInputActionProps = {
    className?: string;
    tooltip: React.ReactNode;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
} & React.ComponentProps<typeof Tooltip>;
declare function PromptInputAction({ tooltip, children, className, side, ...props }: PromptInputActionProps): import("react/jsx-runtime").JSX.Element;
export { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputAction, };
