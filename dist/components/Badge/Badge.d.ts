import React, { CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
interface Props {
    color?: ColorVariant;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Badge: {
    (props: Props): JSX.Element;
    defaultProps: {
        color: string;
    };
};
export { Badge };
