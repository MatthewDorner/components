import React, { ReactNode, CSSProperties } from 'react';
interface Props {
    label?: string | ReactNode;
    id?: string;
    name?: string;
    value?: string;
    inline?: boolean;
    disabled?: boolean;
    checked?: boolean;
    isInvalid?: boolean;
    feedback?: string | ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}
declare const Radio: (props: Props) => JSX.Element;
export { Radio };
