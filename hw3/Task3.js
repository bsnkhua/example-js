/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var inputString;
    var inputStringReverse;

    inputString = input.split('');
    inputString = inputString.join('');
    inputString = inputString.toLowerCase();

    inputStringReverse = input.split('');
    inputStringReverse = inputStringReverse.reverse();
    inputStringReverse = inputStringReverse.join('');
    inputStringReverse = inputStringReverse.toLowerCase();

    var result = inputString != inputStringReverse ? false : true;

    console.log(inputString);
    console.log(inputStringReverse);
    console.log(result);
    return result;
}

isPolindrome('А роза упала на лапу Азора');

module.exports = isPolindrome;
