import * as React from 'react';
import { LineChart, LineChartOptions } from '../../charts';

export default () => {
  const initOptions: LineChartOptions = {
    datas: [
      {
        item: 'item1',
        value: 5,
        time: 1561019825401
      },
      {
        item: 'item2',
        value: 15,
        time: 1561019825401 - 10e6
      }
    ],
    textOptions: {
      size: 30
    },
    scalePaddingLeft: 50,
  };
  return <LineChart options={initOptions}></LineChart>;
};
