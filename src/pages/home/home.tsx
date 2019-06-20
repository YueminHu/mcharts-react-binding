import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import PieChart from './pie-chart';
import LineChart from './line-chart';
import BarChart from './bar-chart';

export default (
  props: RouteComponentProps<{
    id?: string;
  }>
) => {
  return (
    <div>
      <PieChart></PieChart>
      <LineChart></LineChart>
      <BarChart></BarChart>
    </div>
  );
};
