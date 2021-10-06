import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Editor } from './pages/Editor';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { Header } from './cmps/Header';
import React from "react";
import { Templates } from './pages/Templates';
import { Publish } from './pages/Publish';
import { Dashboard } from './pages/Dashboard';
import { LoginSignup } from './pages/LoginSignup';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/signup" component={Login} />
          <Route path="/login" component={Login} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/templates" component={Templates} />
          <Route path="/editor/:wapId" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/about" component={About} />
          <Route path="/publish/:wapId" component={Publish} />
          <Route path="/publish" component={Publish} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
