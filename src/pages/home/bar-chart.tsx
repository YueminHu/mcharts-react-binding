import * as React from 'react';
import { BarChart, BarChartOptions } from '../../charts';

export default () => {
  const initOptions: BarChartOptions = {
    datas: [
      {
        item: 'item1',
        value: 5,
      },
      {
        item: 'item2',
        value: 15,
      },
      {
        item: 'item3',
        value: 12,
      }
    ],
    textOptions: {
      size: 30,
      color: 'red'
    },
    scalePaddingLeft: 50,
    colors: ['red']
  };
  return <BarChart options={initOptions}></BarChart>;
};
