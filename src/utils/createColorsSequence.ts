import { Colors } from './constants';

// индекс цвета или сам цвет
export default (color: Colors | number) => {
  const sequence = [Colors.Red, Colors.Yellow, Colors.Green, Colors.Yellow];
  let colorIndex = typeof color === 'number'
    ? color
    : sequence.indexOf(color);
  return {
    nextColor() {
      colorIndex = (colorIndex + 1) % sequence.length;
      return this.getColor();
    },
    getColor() {
      return sequence[colorIndex];
    },
    getIndex() {
      return colorIndex;
    },
  };
};
