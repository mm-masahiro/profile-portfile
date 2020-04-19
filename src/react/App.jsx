import React from 'react';
const element = <h1 className='greeting'>Hello, world!</h1>
import Button from "./Button";
import Welcome from "./Welcome";

class App extends React.Component {
  constructor () {
    super()
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return <h1>You liked this.</h1>
    }

    return (
      <div>
        <Welcome name="Sara" />
        {element}
        <Button/>
        <button onClick={() => this.setState({ liked: true })}>Like</button>
      </div>
    )
  }
}

export default App;