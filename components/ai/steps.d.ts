import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
export type StepsItemProps = React.ComponentProps<"div">;
export declare const StepsItem: ({ children, className, ...props }: StepsItemProps) => import("react/jsx-runtime").JSX.Element;
export type StepsTriggerProps = React.ComponentProps<typeof CollapsibleTrigger> & {
    leftIcon?: React.ReactNode;
    swapIconOnHover?: boolean;
};
export declare const StepsTrigger: ({ children, className, leftIcon, swapIconOnHover, ...props }: StepsTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type StepsContentProps = React.ComponentProps<typeof CollapsibleContent> & {
    bar?: React.ReactNode;
};
export declare const StepsContent: ({ children, className, bar, ...props }: StepsContentProps) => import("react/jsx-runtime").JSX.Element;
export type StepsBarProps = React.HTMLAttributes<HTMLDivElement>;
export declare const StepsBar: ({ className, ...props }: StepsBarProps) => import("react/jsx-runtime").JSX.Element;
export type StepsProps = React.ComponentProps<typeof Collapsible>;
export declare function Steps({ defaultOpen, className, ...props }: StepsProps): import("react/jsx-runtime").JSX.Element;
