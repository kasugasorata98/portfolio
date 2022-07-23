/**
 * Enhanced random function, selects a random value between a minimum and maximum. If the values provided are both
 * integers then the number returned will be an integer, otherwise the return number will be a decimal.
 * @param min The minimum value
 * @param max The maximum value
 */
export declare function random(min: number, max: number): number;
/**
 * Linear interpolation function to gradually step towards a target value
 * @param start The current value
 * @param end The target value
 * @param normal The rate of change between 0 and 1 (0 = no change, 1 = instant)
 */
export declare function lerp(start: number, end: number, normal: number): number;
/**
 * Gets the height and width of the provided HTML element
 * @param element The html element to measure
 */
export declare function getSize(element?: HTMLElement | null): {
    height: number;
    width: number;
};
