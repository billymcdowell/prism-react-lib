import { VariantProps } from 'class-variance-authority';
import { default as React } from '../../../node_modules/react';
declare const systemMessageVariants: (props?: ({
    variant?: "error" | "action" | "warning" | null | undefined;
    fill?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SystemMessageProps = React.ComponentProps<"div"> & VariantProps<typeof systemMessageVariants> & {
    icon?: React.ReactNode;
    isIconHidden?: boolean;
    cta?: {
        label: string;
        onClick?: () => void;
        variant?: "solid" | "outline" | "ghost";
    };
};
export declare function SystemMessage({ children, variant, fill, icon, isIconHidden, cta, className, ...props }: SystemMessageProps): import("react/jsx-runtime").JSX.Element;
export {};
