import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // 导入App组件
import About from './components/About'; // 导入About组件
import List from './components/List'; // 导入Inbox组件

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-nav">
          <div className="App-link">
            <Link className="link" to="/">
              主页
            </Link>
            <Link className="link" to="/List">
              列表
            </Link>
            <Link className="link" to="/About">
              关于
            </Link>
          </div>
        </div>

        <div className="App-content">
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/List" component={List} />
        </div>
      </div>
    </Router>
  );
}

export default App;
