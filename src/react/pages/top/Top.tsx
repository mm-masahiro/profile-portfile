import * as React  from 'react';
import { useEffect }  from 'react';
import { GlobalHeader } from '../../foundation/components/GlobalHeader';
import { GlobalFooter } from '../../foundation/components/GlobalFooter';
import ContentClient, * as contentClient from '../../foundation/utils/content_client'
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

  async componentDidMount() {
    
  }

  render() {
    return (
      <div className="top">
        <GlobalHeader />
        {
          this.state.items.map(item => (
            <div>
              {/* {JSON.stringify(item)} */}
              {item.fields.title}
            </div>
          ))
        }
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
