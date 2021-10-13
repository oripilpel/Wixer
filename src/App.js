import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Editor } from './pages/Editor';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { Header } from './cmps/Header';
import { Templates } from './pages/Templates';
import { Publish } from './pages/Publish';
import { Dashboard } from './pages/Dashboard';
import { LoginSignup } from './pages/LoginSignup';

export function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/templates" component={Templates} />
          <Route path="/editor/:wapId" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/about" component={About} />
          <Route path="/preview/:wapId" component={Publish} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />
          <Route path="/:wapName" exact component={Publish} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}