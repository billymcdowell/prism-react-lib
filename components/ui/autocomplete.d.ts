export type Option = Record<"value" | "label", string> & Record<string, string>;
type AutoCompleteProps = {
    options: Option[];
    emptyMessage: string;
    value?: Option;
    onValueChange?: (value: Option) => void;
    isLoading?: boolean;
    disabled?: boolean;
    placeholder?: string;
};
export declare const AutoComplete: ({ options, placeholder, emptyMessage, value, onValueChange, disabled, isLoading, }: AutoCompleteProps) => import("react/jsx-runtime").JSX.Element;
export {};
