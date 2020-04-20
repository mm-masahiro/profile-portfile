import * as React from 'react';
import { render } from 'react-dom';

import Button from "./Button";
import Welcome from "./Welcome";

const element = <h1 className="greeting">Hello, world!!!!!!!!!</h1>;

class App extends React.Component<{
  message: string
}> {

  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}

// export default App;

render(<App message="this is props" />, document.getElementById('app'));