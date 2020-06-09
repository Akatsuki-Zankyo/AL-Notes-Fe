import React from 'react';

function About() {
  return (
    <div>
      <h1>这是About</h1>
      <Clock data="我是data" />
    </div>
  );
}

export default About;

/**
 * 时钟测试
 *
 * @class Clock 时钟类
 * @extends {React.Component}  继承React组件类
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <h2>{this.state.date.toLocaleTimeString()}.</h2>;
  }
}
