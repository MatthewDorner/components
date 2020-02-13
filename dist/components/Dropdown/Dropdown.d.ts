import React, { ElementType } from 'react';
import { Item } from './interfaces';
import { ButtonVariant } from '../../interfaces';
interface Props {
    text: string;
    items: Item[];
    id: string;
    variant: ButtonVariant;
    alignRight?: boolean;
    as?: ElementType;
    onClick?: (event: React.MouseEvent<any>) => void;
    size?: 'sm' | 'md' | 'lg';
    direction?: 'down' | 'up' | 'left' | 'right';
    style?: Record<string, any>;
}
declare const Dropdown: {
    (props: Props): JSX.Element;
    defaultProps: {
        id: string;
        variant: string;
        size: string;
        direction: string;
    };
};
export { Dropdown };
