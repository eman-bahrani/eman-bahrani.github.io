import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import BlogPosts from "./containers/BlogPosts/BlogPosts";
import BlogDetail from "./containers/BlogDetail/BlogDetail"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/blogs" component={BlogPosts} />
          <Route path="/blogs/:linkName" component={BlogDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;