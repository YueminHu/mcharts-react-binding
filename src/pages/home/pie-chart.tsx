import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { PieChart, PieChartOptions } from '../../charts';

export default () => {
  const initOptions: PieChartOptions = {
    datas: [
      {
        item: 'item1',
        value: 5
      },
      {
        item: 'item2',
        value: 15
      }
    ],
    radius: {
      inner: 100,
      outer: 200
    },
    textOptions: {
      size: 30
    },
  };
  return <PieChart options={initOptions}></PieChart>;
};
