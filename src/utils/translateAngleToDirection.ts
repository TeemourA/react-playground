enum Directions {
  N = 'N',
  NE = 'NE',
  E = 'E',
  SE = 'SE',
  S = 'S',
  SW = 'SW',
  W = 'W',
  NW = 'NW',
}

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
  if (isNorthern(angle)) return Directions.N;
  if (isNorthEastern(angle)) return Directions.NE;
  if (isEastern(angle)) return Directions.E;
  if (isSouthEastern(angle)) return Directions.SE;
  if (isSouth(angle)) return Directions.S;
  if (isSouthWestern(angle)) return Directions.SW;
  if (isWestern(angle)) return Directions.W;
  if (isNorthWestern(angle)) return Directions.NW;

  return 'N/A';
};

export { translateAngleToDirection };
