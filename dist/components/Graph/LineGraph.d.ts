import { Component } from 'react';
import ChartJs from 'chart.js';
import { Axis, Dataset } from './interfaces';
interface Props {
    fill?: boolean;
    stacked?: boolean;
    title?: string;
    titleFontSize?: number;
    titleFontColor?: string;
    datasets: Dataset[];
    width?: string;
    height?: string;
    xAxes: Axis[];
    yAxes: Axis[];
}
declare class LineGraph extends Component<Props, {}> {
    graph: ChartJs | null;
    chart: HTMLCanvasElement | null;
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { LineGraph };
