import { ReactNode } from 'react';
import { Props as ButtonProps } from '../Button';
import { ButtonsAlignment } from './interfaces';
interface Props {
    show: boolean;
    toggle(): void;
    title?: string;
    body?: ReactNode;
    showHeaderCloseButton?: boolean;
    verticallyCentered?: boolean;
    buttonsAlignment?: ButtonsAlignment;
    closeButton?: ButtonProps;
    middleButton?: ButtonProps;
    successButton?: ButtonProps;
}
declare const Modal: (props: Props) => JSX.Element;
export { Modal };
