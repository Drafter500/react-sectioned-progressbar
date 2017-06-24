import React from 'react';
import PropTypes from 'prop-types';
import { getSectionAngle, calculateSectionsCoords } from './utils';


class SectionedProgressbar extends React.Component {

  calculateRadius() {
    return 90;
  }

  render() {
    const {
      sectionsNumber,
      thickness,
    } = this.props;

    const angleDeg = getSectionAngle(sectionsNumber);
    const radius = this.calculateRadius();
    const sectionLength = Math.PI * radius * (angleDeg / 180);

    const style = {
      fill: 'none',
      stroke: 'green',
      strokeDasharray: `${sectionLength} ${sectionLength}`,
      strokeWidth: 16,
      strokeDashoffset: '5px',
    };

    const centerX = (thickness / 2) + radius;
    const centerY = (thickness / 2) + radius;

    const outputSize = 2 * radius + thickness;

    const sectionCoords = calculateSectionsCoords(sectionsNumber, radius, thickness);

    return (
      <svg width={`${outputSize}`} height={`${outputSize}`}>
        <g transform={`rotate(50 ${centerX} ${centerY})`}>
          {sectionCoords.map((section) => {
          const { x0, y0, x, y } = section;
          return <path d={`M ${x0}, ${y0} A90,90 0 0 1 ${x}, ${y}`} style={style} />;
        })
        }
        </g>
      </svg>
    );
  }
}

Circle.proptypes = {
  sectionsNumber: PropTypes.number,
  thickness: PropTypes.number,
};

Circle.defaultProps = {
  sectionsNumber: 10,
  thickness: 15,
};

export default Circle;
