import * as React from 'react';
import { GlobalHeader } from '../../foundation/components/GlobalHeader';
import { GlobalFooter } from '../../foundation/components/GlobalFooter';
import './Top.css'
import BodyHeader from '../../foundation/components/BodyHeader/BodyHeader';
import BodyContents from '../../foundation/components/BodyContents/BodyContents'

type AppProps = {}

type AppState = {}

export class Top extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="container_header">
          <GlobalHeader />
        </div>
        <div className="container_body">
          <div className="wrapper">
            <BodyHeader />
            <BodyContents />
          </div>
        </div>
        <GlobalFooter />
      </div>
    )
  }
}
