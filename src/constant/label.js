import ColorMap from './color';
import { getRandomInt } from '../util/tool';

const LEN = ColorMap.size;

const COLOR_ARR = Array.from(ColorMap.values());

export default {
    "Default_Label": {
        num: 5,
        color: COLOR_ARR[getRandomInt(LEN)]
    }
}