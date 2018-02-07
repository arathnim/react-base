import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'

import { AnimatedRoute, AnimatedSwitch } from 'react-router-transition'

import './style.sass'

import history from './history'

class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Router history={history}>
        </Router>
    );
  }
}

document.title = ""

render(<Init />, document.getElementById('main'))
