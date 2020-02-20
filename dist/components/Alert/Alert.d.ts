import { Component, ReactNode, CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
interface Props {
    color?: ColorVariant;
    title?: string;
    message?: ReactNode;
    dismissible?: boolean;
    closeLabel?: string;
    className?: string;
    style?: CSSProperties;
    btnClassName?: string;
    btnStyle?: CSSProperties;
}
interface State {
    show: boolean;
}
declare class Alert extends Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export { Alert };
