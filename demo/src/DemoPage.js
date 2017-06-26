import React from 'react';
import SectionedProgressbar from '../../src/SectionedProgressbar';


class DemoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 7, progress: 0 };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const prevProgress = this.state.progress;
      const progress = prevProgress >= this.state.total ? 0 : prevProgress + 1;
      this.setState({ progress });
    }, 750);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  textFormatter(progress) {
    const { total } = this.state;
    return (
      <tspan>
        <tspan className="">{progress} </tspan>
        <tspan className="total">{` / ${total}`}</tspan>
      </tspan>
    );
  }

  render() {
    const { total, progress } = this.state;
    return (
      <SectionedProgressbar
        sizePx={300}
        thickness={25}
        total={total}
        progress={progress}
        sectionsGapPercent={30}
        className="custom"
        textFormatter={this.textFormatter.bind(this)}
      />);
  }
}

export default DemoPage;
