import React from 'react';
import ReactDOM from 'react-dom';
import SectionedProgressbar from '../../src/SectionedProgressbar';


ReactDOM.render(
  <SectionedProgressbar
    sizePx={500}
    thickness={35}
    sectionsNumber={7}
    sectionsGapPercent={10}
  />,
  document.getElementById('root'),
);
