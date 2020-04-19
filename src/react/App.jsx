import React from "react";
import Button from "./Button";
import Welcome from "./Welcome";

const element = <h1 className="greeting">Hello, world!</h1>;

class App extends React.Component {
  constructor() {
    super();
    this.state.liked = false;
  }

  render() {
    const { liked } = this.state;
    if (liked) {
      return <h1>You liked this.</h1>;
    }

    return (
      <div>
        <Welcome name="Sara" />
        {element}
        <Button />
        <button type="button" onClick={() => this.setState({ liked: true })}>
          Like
        </button>
      </div>
    );
  }
}

export default App;
