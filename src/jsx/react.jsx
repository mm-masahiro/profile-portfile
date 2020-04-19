'use strict';

const e = React.createElement;

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

class App extends React.Component {
  constructor(  ) {
    super(  );
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
        <h1>You liked this.</h1>
      )
    }

    return (
      <div>
        { element }
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(App), domContainer);