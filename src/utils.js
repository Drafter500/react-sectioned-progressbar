const RADIAN = 180 / Math.PI;

export function getSectionAngle(sectionsNumber) {
  return 360 / sectionsNumber;
}

export function calculateSectionsCoords(sectionsNumber, radius, thickness) {
  const sectionCoords = [];

  const startX = radius + thickness / 2;
  let startY = thickness / 2;

  let prevX = startX;
  let prevY = startY;

    // Shift coordinates - we need to start at the top of the circle, not in the center
  const angleShift = (90 / RADIAN);
  startY += radius;

  const angleRad = getSectionAngle(sectionsNumber) / RADIAN;

  for (let i = 0; i < sectionsNumber; ++i) {
    const newX = startX + radius * Math.cos(angleRad * (i + 1) - angleShift);
    const newY = startY + radius * Math.sin(angleRad * (i + 1) - angleShift);
    sectionCoords.push({
      x0: prevX,
      y0: prevY,
      x: newX,
      y: newY,
    });
    prevX = newX;
    prevY = newY;
  }

  return sectionCoords;
}
