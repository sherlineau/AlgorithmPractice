/**
 * From a Chipotle interview.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

// temp = 20
const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
// [15, 17, 30]
function measureWaterLevels(waterLevels) {
    let lowestLevel = waterLevels[0]
    let largestRise = -1;

    for (let i = 1 ; i < waterLevels.length; i++ ) {
        if ( waterLevels[i] - lowestLevel > largestRise) {
            largestRise = waterLevels[i] - lowestLevel
        } else if (waterLevels[i] < lowestLevel) {
            lowestLevel = waterLevels[i]
        }
    } return largestRise === 0 ? -1 : largestRise    
}
//  for i = 1 ;  i < waterlevels length -> 3
// i = 1
    // if waterLevels[1] - lowestLevel > largestRise
    //        17  -   15  = 2  > -1
    // largest = 17 - 15 = 2
// i = 2
    // waterLevels[2] - lowestLevel > largestRise
    //     if   30  -   15 = 15 >  2
    // largest = 30 - 15 = 15  
// i = 3
// exit loop
// return largestRise = 15
console.log(measureWaterLevels(riverLevels1))

console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))
