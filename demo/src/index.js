import React from 'react';
import ReactDOM from 'react-dom';
import SectionedProgressbar from '../../src/SectionedProgressbar';


ReactDOM.render(
  <SectionedProgressbar
    sizePx={300}
    thickness={25}
    total={7}
    progress={2}
    sectionsGapPercent={30}
    className="custom"
  />,
  document.getElementById('root'),
);
