type FeedbackBarProps = {
    className?: string;
    title?: string;
    icon?: React.ReactNode;
    onHelpful?: () => void;
    onNotHelpful?: () => void;
    onClose?: () => void;
};
export declare function FeedbackBar({ className, title, icon, onHelpful, onNotHelpful, onClose, }: FeedbackBarProps): import("react/jsx-runtime").JSX.Element;
export {};
