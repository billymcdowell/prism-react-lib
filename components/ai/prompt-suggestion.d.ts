import { buttonVariants } from '../ui/button';
import { VariantProps } from 'class-variance-authority';
export type PromptSuggestionProps = {
    children: React.ReactNode;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
    className?: string;
    highlight?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare function PromptSuggestion({ children, variant, size, className, highlight, ...props }: PromptSuggestionProps): import("react/jsx-runtime").JSX.Element;
export { PromptSuggestion };
