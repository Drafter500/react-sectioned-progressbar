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

  textFormatter(total) {
    return progress => (
      <tspan>
          <tspan className="">{progress} </tspan>
          <tspan className="total">{`/ ${total || this.state.total}`}</tspan>
        </tspan>
      );
  }

  render() {
    const { total, progress } = this.state;
    return (
      <div className="showCollection">
        <SectionedProgressbar
          sizePx={200}
          thickness={18}
          total={total}
          progress={progress}
          sectionsGapPercent={30}
          className="example1"
          textFormatter={this.textFormatter(total)}
        />
        <SectionedProgressbar
          sizePx={200}
          thickness={12}
          total={10}
          progress={3}
          sectionsGapPercent={10}
          className="example2"
          textFormatter={this.textFormatter(10)}
        />
        <SectionedProgressbar
          sizePx={200}
          thickness={45}
          total={30}
          progress={25}
          sectionsGapPercent={15}
          className="example3"
        >
        62%
        </SectionedProgressbar>
        <SectionedProgressbar
          sizePx={200}
          thickness={18}
          total={30}
          progress={25}
          sectionsGapPercent={15}
          className="example4"
          textFormatter={prog => `${((prog / 30) * 100).toFixed(0)}%`}
        />
        <SectionedProgressbar
          sizePx={200}
          thickness={18}
          total={25}
          progress={10}
          sectionsGapPercent={99}
          className="example5"
          textFormatter={prog => `${((prog / 30) * 100).toFixed(0)}%`}
        />
      </div>);
  }
}

export default DemoPage;
