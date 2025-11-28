import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { default as React } from '../../../node_modules/react';
export type ChainOfThoughtItemProps = React.ComponentProps<"div">;
export declare const ChainOfThoughtItem: ({ children, className, ...props }: ChainOfThoughtItemProps) => import("react/jsx-runtime").JSX.Element;
export type ChainOfThoughtTriggerProps = React.ComponentProps<typeof CollapsibleTrigger> & {
    leftIcon?: React.ReactNode;
    swapIconOnHover?: boolean;
};
export declare const ChainOfThoughtTrigger: ({ children, className, leftIcon, swapIconOnHover, ...props }: ChainOfThoughtTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type ChainOfThoughtContentProps = React.ComponentProps<typeof CollapsibleContent>;
export declare const ChainOfThoughtContent: ({ children, className, ...props }: ChainOfThoughtContentProps) => import("react/jsx-runtime").JSX.Element;
export type ChainOfThoughtProps = {
    children: React.ReactNode;
    className?: string;
};
export declare function ChainOfThought({ children, className }: ChainOfThoughtProps): import("react/jsx-runtime").JSX.Element;
export type ChainOfThoughtStepProps = {
    children: React.ReactNode;
    className?: string;
    isLast?: boolean;
};
export declare const ChainOfThoughtStep: ({ children, className, isLast, ...props }: ChainOfThoughtStepProps & React.ComponentProps<typeof Collapsible>) => import("react/jsx-runtime").JSX.Element;
