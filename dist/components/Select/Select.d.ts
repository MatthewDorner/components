import React, { CSSProperties } from 'react';
interface Props {
    multiple?: boolean;
    disabled?: boolean;
    isInvalid?: boolean;
    size?: 'small' | 'large';
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Select: (props: Props) => JSX.Element;
export { Select };
