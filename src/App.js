import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./containers/Main";
import BlogPosts from "./containers/BlogPosts/BlogPosts";
import BlogDetail from "./containers/BlogDetail/BlogDetail"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Link exact path="/blogs" component={BlogPosts} />
          <Link path="/blogs/:linkName" component={BlogDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;