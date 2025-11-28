import { TProps as JsxParserProps } from 'react-jsx-parser';
export type JSXPreviewProps = {
    jsx: string;
    isStreaming?: boolean;
} & JsxParserProps;
declare function JSXPreview({ jsx, isStreaming, ...props }: JSXPreviewProps): import("react/jsx-runtime").JSX.Element;
export { JSXPreview };
