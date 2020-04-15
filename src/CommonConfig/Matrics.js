import { Dimensions } from 'react-native';
import { scale, StatusBarHeight } from './Helpers/functions';

const { width, height } = Dimensions.get("window");

let screenHeight = width < height ? height : width
let screenWidth = width < height ? width : height

const Scale = (val) => {
  return scale(val)
};

export default Scale;
export { screenHeight, screenWidth, StatusBarHeight }
