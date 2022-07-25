/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let numSteps = 0;
    while ( num !== 0) {
        if ( num % 2 === 0) {
            num = num / 2;
            numSteps++;
        } else {
            num--
            numSteps++
        }
    } return numSteps
};