import React, { CSSProperties } from 'react';
import { IconType } from './interfaces';
interface Props {
    icon: IconType;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<any>) => void;
}
declare const Icon: (props: Props) => JSX.Element;
export { Icon };
