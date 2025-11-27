import { default as React } from '../../../node_modules/react';
interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Guidelines({ children, className, ...props }: BaseProps): import("react/jsx-runtime").JSX.Element;
export declare function Dos({ children, className, ...props }: BaseProps): import("react/jsx-runtime").JSX.Element;
export declare function Donts({ children, className, ...props }: BaseProps): import("react/jsx-runtime").JSX.Element;
export declare function Callout({ children, className, title, variant, ...props }: BaseProps & {
    title?: string;
    variant?: "info" | "warning" | "danger";
}): import("react/jsx-runtime").JSX.Element;
export declare function SectionHeader({ title, description, className, ...props }: Omit<BaseProps, "children"> & {
    title: string;
    description?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function FeatureList({ children, className, ...props }: BaseProps): import("react/jsx-runtime").JSX.Element;
export {};
