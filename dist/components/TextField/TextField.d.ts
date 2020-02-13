import React, { CSSProperties } from 'react';
interface Props {
    disabled?: boolean;
    isInvalid?: boolean;
    name?: string;
    rows?: number;
    size?: 'small' | 'large';
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    style?: CSSProperties;
}
declare const TextField: (props: Props) => JSX.Element;
export { TextField };
