import { default as React } from '../../../node_modules/react';
interface DateInputProps {
    value?: Date;
    onChange: (date: Date) => void;
}
declare const DateInput: React.FC<DateInputProps>;
export { DateInput };
