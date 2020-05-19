import * as React  from 'react';
import { useEffect }  from 'react';
import { GlobalHeader } from '../../foundation/components/GlobalHeader';
import { GlobalFooter } from '../../foundation/components/GlobalFooter';
import './Top.css'

import { Link } from "react-router-dom";

type AppProps = {}

type AppState = {}

export class Top extends React.Component<AppProps, AppState> {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="top">
        <GlobalHeader />
        <div>
          <Link to="/posts">posts</Link>
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
