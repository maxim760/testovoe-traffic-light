// eslint-disable-next-line
export enum Colors {
  Red = 'red',
  Green = 'green',
  Yellow = 'yellow',
}
// eslint-disable-next-line
export enum StorageKeys {
  Color = 'color',
  ColorIndex = 'color-index',
  Time = 'time'
}

export const TrafficLightParams = {
  [Colors.Red]: {
    timeInSec: 10,
    colorClass: 'red',
    index: 0,
  },
  [Colors.Yellow]: {
    timeInSec: 3,
    colorClass: 'yellow',
    index: 1,
  },
  [Colors.Green]: {
    timeInSec: 15,
    colorClass: 'green',
    index: 2,
  },
};
export const paleColorsClasses = [
  'red-pale',
  'yellow-pale',
  'green-pale',
];
export const paths = Object
  .values(Colors)
  .reduce((acc: { [key in Colors]?: Colors }, color) => (
    { ...acc, [color]: `/${color}` }
  ), {}) as { [key in Colors]: Colors };
