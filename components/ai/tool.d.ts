export type ToolPart = {
    type: string;
    state: "input-streaming" | "input-available" | "output-available" | "output-error";
    input?: Record<string, unknown>;
    output?: Record<string, unknown>;
    toolCallId?: string;
    errorText?: string;
};
export type ToolProps = {
    toolPart: ToolPart;
    defaultOpen?: boolean;
    className?: string;
};
declare const Tool: ({ toolPart, defaultOpen, className }: ToolProps) => import("react/jsx-runtime").JSX.Element;
export { Tool };
