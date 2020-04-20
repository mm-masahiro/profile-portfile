import * as React from 'react';
import { render } from 'react-dom';

import Button from "./Button";
import Welcome from "./Welcome";

const element = <h1 className="greeting">Hello, world!!!!!!!!!</h1>;

class App extends React.Component<{
  message: string
}, {
  count: number
}> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
    )
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

// export default App;

render(<App message="this is props" />, document.getElementById('app'));