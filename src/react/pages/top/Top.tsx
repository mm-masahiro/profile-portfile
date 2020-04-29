import * as React from 'react';
import { GlobalHeader } from '../../foundation/components/GlobalHeader';
import { GlobalFooter } from '../../foundation/components/GlobalFooter';
import './Top.css'

type AppProps = {}

type AppState = {}

export class Top extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top">
        <GlobalHeader />
        <div>
          <div>this is body</div>
          <div>this is body</div>
          <div>this is body</div>
          <div>this is body</div>
          <div>this is body</div>
        </div>
        <GlobalFooter />
      </div>
    )
  }
}
