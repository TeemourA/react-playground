const isNorthern = (angle: number) =>
  (angle >= 338 && angle < 360) || (angle >= 0 && angle < 23);
const isNorthEastern = (angle: number) => angle >= 23 && angle < 68;
const isEastern = (angle: number) => angle >= 68 && angle < 113;
const isSouthEastern = (angle: number) => angle >= 113 && angle < 158;
const isSouth = (angle: number) => angle >= 158 && angle < 203;
const isSouthWestern = (angle: number) => angle >= 203 && angle < 248;
const isWestern = (angle: number) => angle >= 248 && angle < 293;
const isNorthWestern = (angle: number) => angle >= 293 && angle < 338;

const translateAngleToDirection = (angle: number) => {
  if (isNorthern(angle)) return 'N';
  if (isNorthEastern(angle)) return 'NE';
  if (isEastern(angle)) return 'E';
  if (isSouthEastern(angle)) return 'SE';
  if (isSouth(angle)) return 'S';
  if (isSouthWestern(angle)) return 'SW';
  if (isWestern(angle)) return 'W';
  if (isNorthWestern(angle)) return 'NW';

  return 'N/A';
};

export { translateAngleToDirection };
