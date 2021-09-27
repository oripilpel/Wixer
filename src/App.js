import { Editor } from './pages/Editor';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { Header } from './cmps/Header';
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Templates } from './pages/Templates';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path="/templates" component={Templates} />
          <Route path="/editor/:wapId" component={Editor} />
          <Route path="/editor" component={Editor} />
          {/* <Route
            path='/editor'
            render={(props) => (
              <Wall {...props}
                mails={mails}
                type={type}
                onToggleCheckAll={this.onToggleCheckAll}
                onSort={this.onSort}
                onMailSetChecked={this.onMailSetChecked}
                isShowTrash={isShowTrash}
                onRemove={this.onRemove} />
            )} /> */}
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
