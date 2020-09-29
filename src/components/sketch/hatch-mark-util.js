import { lerp } from "canvas-sketch-util/math";

export const subDivideIncrement = (start, end, depth) => {
  let incs = [
    { value: start, depth: 0 },
    { value: end, depth: 0 },
  ];
  for (let i = 1; i <= depth; i++) {
    let currentIncs = [...incs];
    for (let j = currentIncs.length - 1; j >= 1; j--) {
      const e = currentIncs[j].value;
      const s = currentIncs[j - 1].value;
      incs.splice(j, 0, {
        value: (e + s) / 2,
        depth: i,
      });
    }
  }

  return incs.slice(1, incs.length - 1);
};

export const generateLineMarkersGeometry = ({
  innerRadius,
  outerRadius,
  majorIncrements,
  subDivisions,
}) => {
  const points = [];
  const stepSize = (Math.PI * 2) / majorIncrements;
  for (let i = 0; i < majorIncrements; i++) {
    const radialPoint = new THREE.Vector3(
      Math.cos(i * stepSize),
      Math.sin(i * stepSize)
    );
    points.push(radialPoint.clone().multiplyScalar(innerRadius));
    points.push(radialPoint.clone().multiplyScalar(outerRadius));
    subDivideIncrement(i * stepSize, (i + 1) * stepSize, subDivisions).forEach(
      ({ value, depth }) => {
        const subRadPoint = new THREE.Vector3(Math.cos(value), Math.sin(value));
        points.push(subRadPoint.clone().multiplyScalar(innerRadius));
        const outer = lerp(
          innerRadius,
          outerRadius,
          (subDivisions - depth + 1) / subDivisions
        );
        points.push(subRadPoint.clone().multiplyScalar(outer));
      }
    );
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return geometry;
};
