import React from 'react';
import { Button, message } from 'antd';
import './App.css';

function App() {
  function clickMe() {
    message.info('点击了按钮');
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={clickMe}>
          点我试试
        </Button>
      </header>
    </div>
  );
}

export default App;
