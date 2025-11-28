export type FileUploadProps = {
    onFilesAdded: (files: File[]) => void;
    children: React.ReactNode;
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
};
declare function FileUpload({ onFilesAdded, children, multiple, accept, disabled, }: FileUploadProps): import("react/jsx-runtime").JSX.Element;
export type FileUploadTriggerProps = React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
};
declare function FileUploadTrigger({ asChild, className, children, ...props }: FileUploadTriggerProps): import("react/jsx-runtime").JSX.Element;
type FileUploadContentProps = React.HTMLAttributes<HTMLDivElement>;
declare function FileUploadContent({ className, ...props }: FileUploadContentProps): import('../../../node_modules/react').ReactPortal | null;
export { FileUpload, FileUploadTrigger, FileUploadContent };
