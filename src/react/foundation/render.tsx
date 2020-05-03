import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './root';

export function render() {
  const root = document.getElementById('app');

  ReactDOM.render(
    <Root />,
    root,
  );
}
