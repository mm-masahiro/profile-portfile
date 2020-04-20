import * as React from 'react';
import { render } from 'react-dom';

import Button from "./Button";
import Welcome from "./Welcome";

const element = <h1 className="greeting">Hello, world!!!!!!!!!</h1>;

// interface AppState {
//   liked: boolean
// }

// class App extends React.Component<AppState, {}> {
//   constructor() {
//     super(null);
//     this.state = { liked: false };
//   }

//   render() {
//     const { liked } = this.state;
//     if (liked) {
//       return <h1>You liked this.</h1>;
//     }

//     return (
//       <div>
//         <Welcome name="Sara" />
//         {element}
//         <Button />
//         <button type="button" onClick={() => this.setState({ liked: true })}>
//           Like
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

render(element, document.getElementById('app'));