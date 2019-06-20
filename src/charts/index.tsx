import * as React from 'react';
import './common.css';

/**
 * 柱状图、饼图、折线图
 */
import BarChartDOM from './charts/bar';
import PieChartDOM from './charts/pie';
import LineChartDOM from './charts/line';
// import { react } from "babel-types";

/**
 * 通用的图表数据结构
 */
export interface ChartDataStruct {
  item: string;
  value: number;
}

/**
 * 通用的图表配置项
 */
export interface CommonChartOptions {
  /**
   * mountNode
   */
  mountNode?: Element;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 高度
   */
  height?: number;
  /**
   * dpi, 在高DPI设备商(如Retina屏幕)上面可以设置为devicePixelRatio
   */
  dpi?: number;
  /**
   * 主题颜色
   */
  colors?: string[];
  /**
   * 文字选项
   */
  textOptions?: {
    size?: number;
    color?: string;
  };
  /**
   * 线选项
   */
  lineOptions?: {
    width?: number;
    color?: string;
    gradient?: [number, string][];
    bezierCurve?: boolean;
  };
  /**
   * x, y轴选项
   */
  scaleOptions?: {
    width?: number;
    color?: string;
    dash?: number[];
    x?: {
      format?: string;
      tip?: boolean;
    };
  };
  /**
   * 指示器选项
   */
  toolTip?: {
    renderer?: (data: ChartDataStruct, x: number, y: number) => string;
    color?: string[];
  };
}

/**
 * 柱状图专用选项
 */
export interface BarChartOptions extends CommonChartOptions {
  datas?: ChartDataStruct[];
  // 是否使用百分比
  usePercentage?: boolean; 
  // 是否显示x, y刻度
  drawScale?: {
    x?: boolean;
    y?: boolean;
  }; 
  /**
   * 柱子的样式
   */
  barStyle: {
    width?: number;
    color?: string;
    lineCap: CanvasLineCap | string;
  };
  /**
   * 左内边距
   */
  scalePaddingLeft: number;
}

/**
 * 饼图专用选项
 */
export interface PieChartOptions extends CommonChartOptions {
  datas?: ChartDataStruct[];
  /**
   * 内外圈的半径, 单位px, 注意是半径
   */
  radius: {
    inner: number;
    outer: number;
  };
  /**
   * 从哪一个radius开始, 默认为0, 最大值为Math.PI * 2
   */
  startAngle?: number;
  /**
   * 每一个饼图区域之间的gap
   */
  gap?: number;
  /**
   * 是否显示图例, 默认为true
   */
  legends?: boolean;
}

/**
 * 时间折线图数据结构
 */
export interface LineChartDataStruct {
  time: number;
  value: number;
  item?: string;
}

export interface LineChartOptions extends CommonChartOptions {
  datas: LineChartDataStruct[];
  // 是否显示刻度
  drawScale?: {
    x?: boolean;
    y?: boolean;
  }; 
  /**
  * 左内边距
  */
  scalePaddingLeft: number;
}

// const width = window.innerWidth;

// window.barChart = new BarChart({
//   mountNode: document.querySelector("#root"),
//   datas: [{ item: "播放", value: 10 }, { item: "点赞", value: 10 }, { item: "点赞", value: 28 }, { item: "点赞", value: 28 }],
//   height: width * 0.8,
//   width: width * 0.8,
//   textOptions: {
//     size: 16
//   },
//   lineOptions: {
//     width: 1,
//     color: "#fff"
//   },
//   colors: ["#0FFCF5"],
//   usePercentage: true,
//   drawScale: {
//     x: true,
//     y: false
//   },
//   barStyle: {
//     width: width * 0.18,
//     lineCap: "square"
//   },
//   scalePaddingLeft: 0
// });

// window.pieChart = new PieChart({
//   mountNode: document.querySelector("#root"),
//   datas: [
//     { item: "播放", value: 10 },
//     { item: "点赞", value: 10 },
//     { item: "点赞", value: 28 },
//     { item: "点赞", value: 28 },
//     { item: "点赞", value: 28 },
//     { item: "点赞", value: 5 }
//   ],
//   height: width * 0.8,
//   width: width * 0.9,
//   textOptions: {
//     size: 16
//   },
//   lineOptions: {
//     width: 1
//   },
//   radius: {
//     inner: width * 0.2,
//     outer: width * 0.3
//   },
//   startAngle: 0,
//   gap: Math.PI / 100,
//   legends: true
// });

// const lineChartSettings: LineChartOptions = {
//   mountNode: document.querySelector("#root"),
//   colors: ["red"],
//   datas: [
//     { item: "播放0", value: 4.06974592501931, time: 1554120768876 },
//     { item: "播放1", value: 1.258310528188843, time: 1554120768876 },
//     { item: "播放2", value: 4.487198864924272, time: 1554120768876 },
//     { item: "播放3", value: 2.5257653848128547, time: 1554120768876 },
//     { item: "播放4", value: 0.9268780322951775, time: 1554120768876 },
//     { item: "播放5", value: 0.07358710719595485, time: 1554120768876 },
//     { item: "播放6", value: 1.4428415276032547, time: 1554120768876 },
//     { item: "播放7", value: 4.966146769870501, time: 1554120768876 },
//     { item: "播放8", value: 3.5032981745273997, time: 1554120768876 },
//     { item: "播放9", value: 2.7858088997177877, time: 1554120768876 },
//     { item: "播放10", value: 2.7384762135042062, time: 1554120768876 },
//     { item: "播放11", value: 2.0829781335659927, time: 1554120768876 },
//     { item: "播放12", value: 0.580843675839271, time: 1554120768876 },
//     { item: "播放13", value: 0.6517889124018694, time: 1554120768876 },
//     { item: "播放14", value: 1.8098070479347639, time: 1554120768876 },
//     { item: "播放15", value: 4.046090065662322, time: 1554120768876 },
//     { item: "播放16", value: 4.447353743503111, time: 1554120768876 },
//     { item: "播放17", value: 3.749894842933188, time: 1554120768876 },
//     { item: "播放18", value: 4.95052673211264, time: 1554120768876 },
//     { item: "播放19", value: 3.668258770718925, time: 1554120768876 },
//     { item: "播放20", value: 3.6376851717879854, time: 1554120768876 },
//     { item: "播放21", value: 2.7812990907869937, time: 1554120768876 },
//     { item: "播放22", value: 1.0556948239352304, time: 1554120768876 },
//     { item: "播放23", value: 2.9876119657760603, time: 1554120768876 },
//     { item: "播放24", value: 2.852370880871198, time: 1554120768876 },
//     { item: "播放25", value: 2.183472153761402, time: 1554120768876 },
//     { item: "播放26", value: 4.375492403702539, time: 1554120768876 },
//     { item: "播放27", value: 1.761968038003392, time: 1554120768876 },
//     { item: "播放28", value: 0.923624386728068, time: 1554120768876 },
//     { item: "播放29", value: 2.36674609667738, time: 1554120768876 }
//   ],
//   height: width * 0.8,
//   width: width * 0.9,
//   textOptions: {
//     size: 16
//   },
//   lineOptions: {
//     width: 4,
//     gradient: [],
//     bezierCurve: true
//   },
//   scalePaddingLeft: 0,
//   drawScale: {
//     x: true,
//     y: false
//   },
//   toolTip: {
//     color: ["rgba(15,252,245,0.80)"]
//   }
// };

// // console.log(lineChartSettings);

// window.lineChart = new LineChart(lineChartSettings);

let chartIndex = 0;

export class LineChart extends React.PureComponent<{ options: LineChartOptions }> {
  chart: LineChartDOM;
  state = {
    id: `lineChart-${chartIndex++}`
  };
  componentDidMount() {
    const { id } = this.state;
    const { options } = this.props;
    this.chart = new LineChartDOM({ ...options, mountNode: document.getElementById(id) });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.options.datas !== this.props.options.datas) {
      this.chart.rerender(this.props.options.datas);
    }
  }
  render() {
    /**
     * 先创建供mount的元素, 下面同理
     */
    const { id } = this.state;
    return <div id={id} />;
  }
}

export class BarChart extends React.PureComponent<{ options: BarChartOptions }> {
  chart: BarChartDOM;
  state = {
    id: `barChart-${chartIndex++}`
  };
  componentDidMount() {
    const { id } = this.state;
    const { options } = this.props;
    this.chart = new BarChartDOM({ ...options, mountNode: document.getElementById(id) });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.options.datas.length !== this.props.options.datas.length) {
      this.chart.rerender(this.props.options.datas);
    }
  }
  render() {
    const { id } = this.state;
    return <div id={id} />;
  }
}

export class PieChart extends React.PureComponent<{ options: PieChartOptions }> {
  chart: PieChartDOM;
  state = {
    id: `pieChart-${chartIndex++}`
  };
  componentDidMount() {
    const { id } = this.state;
    const { options } = this.props;

    this.chart = new PieChartDOM({ ...options, mountNode: document.getElementById(id) });
  }
  render() {
    const { id } = this.state;
    return <div id={id} />;
  }
}
