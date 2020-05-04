import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Top } from "../pages/top"
import * as Posts from "../pages/posts/Posts"
import * as SinglePost from "../pages/single-post/SinglePost"

// eslint-disable-next-line import/prefer-default-export
export function Root() {
  return (
    <Router history={createBrowserHistory()}>
      <ul className="flex">
        <li className="mr-2">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top">About</Link>
        </li>
      </ul>
      
      <Switch>
        <Route path="/top" component={Top} />
        <Route path="/posts/:id" component={SinglePost.default} />
        <Route path="/" exact component={Posts.default} />
      </Switch>
    </Router>
  );
};
