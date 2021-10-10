import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Editor } from './pages/Editor';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { Header } from './cmps/Header';
import { Templates } from './pages/Templates';
import { Publish } from './pages/Publish';
import { Dashboard } from './pages/Dashboard';
import { LoginSignup } from './pages/LoginSignup';
import { userService } from './services/user.service';
import { setUser } from './store/user.actions';

function _App({ setUser }) {
  useEffect(() => {
    const user = userService.getLoggedinUser();
    if (user) setUser(user);
  }, []);

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
          <Route path="/publish/:wapId" component={Publish} />
          <Route path="/preview" component={Publish} />
          <Route path="/publish" component={Publish} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}


const mapDispatchToProps = {
  setUser
}


export const App = connect(null, mapDispatchToProps)(_App);
