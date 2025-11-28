import { buttonVariants } from '../ui/button';
import { VariantProps } from 'class-variance-authority';
export type ScrollButtonProps = {
    className?: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare function ScrollButton({ className, variant, size, ...props }: ScrollButtonProps): import("react/jsx-runtime").JSX.Element;
export { ScrollButton };
