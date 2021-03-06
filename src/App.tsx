import * as React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import { Action } from 'history';
import Routes from './routes';
import PageTransition from 'hocs/pagetransition';

export const routeStyles: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '0',
  height: '100%',
  width: '100%',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  overflowY: 'scroll',
  transition: 'transform 250ms ease-in, filter 250ms linear'
};

class App extends React.PureComponent<RouteComponentProps, {}> {
  state = {};
  componentDidMount() {
    const shade = document.querySelector('#loading');
    shade && shade.remove();
  }
  render() {
    const { location, history } = this.props;
    return (
      <PageTransition history={history}>
        <Routes location={location} />
      </PageTransition>
    );
  }
}

export default withRouter(App);
