/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    var array = input;
    var newarray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            delete array[i];
            console.log(array);
        }
    }




    console.log(input);
    return;
}

// function isPositive(num) {
//     var num = num === 1 ? 'true' : 'false';
// }

negativeFilter([1, -2, 2, 3, 4, 5, -5]);


module.exports = negativeFilter;