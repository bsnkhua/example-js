/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    var inputString;
    var inputStringReverse;

    inputString = input.toLowerCase();
    // inputString = inputString.split('');

    // for (i = 0; i <inputString.length; i++) {
    //     if (inputString[i] === ',' || inputString[i] === ' ' || inputString[i] === '!' || inputString[i] === '.') {
    //         delete inputString[i];
    //         // console.log(inputString);
    //     }
    // }
    // inputString = inputString.join('');
    
    inputString = inputString.replace(/\,| |\!|\./g, "");

    inputStringReverse = inputString.split('');
    inputStringReverse = inputStringReverse.reverse();
    inputStringReverse = inputStringReverse.join('');

    var result = inputString != inputStringReverse ? false : true;

    console.log(inputString);
    console.log(inputStringReverse);
    console.log(result);
    return result;
}

isPolindrome('д.од,дод!');
// isPolindrome('А роза упала на лапу Азора');

module.exports = isPolindrome;
