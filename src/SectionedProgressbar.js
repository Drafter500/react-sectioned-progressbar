import React from 'react';
import PropTypes from 'prop-types';
import { getSectionAngle, calculateSectionsCoords } from './utils';


class SectionedProgressbar extends React.Component {

  calculateRadius() {
    const { sizePx, thickness } = this.props;
    return (sizePx - thickness) / 2;
  }

  calculateRotationAngle() {
    const { total, sectionsGapPercent } = this.props;
    return ((360 / total) * (sectionsGapPercent / 100)) / 2;
  }

  calculateGapInPixels(sectionLength) {
    const { sectionsGapPercent } = this.props;
    return (sectionLength * sectionsGapPercent) / 100;
  }

  render() {
    const {
      total,
      thickness,
      className,
      progress,
      textFormatter,
    } = this.props;

    const radius = this.calculateRadius();
    const angleDeg = getSectionAngle(total);
    const sectionLength = Math.PI * radius * (angleDeg / 180);

    const gapPx = this.calculateGapInPixels(sectionLength);

    const style = {
      fill: 'none',
      strokeDasharray: `${sectionLength} ${sectionLength}`,
      strokeWidth: thickness,
      strokeDashoffset: `${gapPx}px`,
    };

    const centerX = (thickness / 2) + radius;
    const centerY = (thickness / 2) + radius;

    const outputSize = (2 * radius) + thickness;

    const sectionCoords = calculateSectionsCoords(total, radius, thickness);
    const rotationAngle = this.calculateRotationAngle();

    return (
      <svg
        className={`sectionedProgressBar ${className}`}
        width={`${outputSize}`}
        height={`${outputSize}`}
      >
        <g transform={`rotate(${rotationAngle} ${centerX} ${centerY})`}>
          {sectionCoords.map((section, i) => {
            const { x0, y0, x, y } = section;
            const sectionDone = i < progress;
            const activeClass = sectionDone ? ' active' : '';
            return (
              <path
                d={`M ${x0}, ${y0} A${radius},${radius} 0 0 1 ${x}, ${y}`}
                className={`sectionedProgressBar-section${activeClass}`}
                style={style}
              />
            );
          })
        }
        </g>
        <text
          className="sectionedProgressBar-text"
          x={radius + thickness / 2}
          y={radius + thickness / 2}
        >
          {textFormatter(progress)}
        </text>
      </svg>
    );
  }
}

SectionedProgressbar.propTypes = {
  sizePx: PropTypes.number,
  total: PropTypes.number,
  progress: PropTypes.number,
  thickness: PropTypes.number,
  sectionsGapPercent: PropTypes.number,
  className: PropTypes.string,
};

SectionedProgressbar.defaultProps = {
  sizePx: 200,
  total: 10,
  progress: 0,
  thickness: 15,
  sectionsGapPercent: 5,
  className: '',
};

export default SectionedProgressbar;
