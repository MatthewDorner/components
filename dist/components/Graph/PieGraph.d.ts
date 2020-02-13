import { Component } from 'react';
import ChartJs from 'chart.js';
import { Dataset } from './interfaces';
interface Props {
    doughnut?: boolean;
    title?: string;
    titleFontSize?: number;
    titleFontColor?: string;
    datasets: Dataset[];
    width?: string;
    height?: string;
}
declare class PieGraph extends Component<Props, {}> {
    graph: ChartJs | null;
    chart: HTMLCanvasElement | null;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { PieGraph };
