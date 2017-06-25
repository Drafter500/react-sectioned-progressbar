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

  render() {
    return (
      <SectionedProgressbar
        sizePx={300}
        thickness={25}
        total={this.state.total}
        progress={this.state.progress}
        sectionsGapPercent={30}
        className="custom"
      />);
  }
}

export default DemoPage;
