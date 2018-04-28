function isPolindrome(input) {
    var inputString;
    var inputStringReverse;

    inputString = input.toLowerCase();
    inputString = inputString.split('');
    inputString = inputString.join('');

    inputStringReverse = inputString.split('');
    inputStringReverse = inputStringReverse.reverse();
    inputStringReverse = inputStringReverse.join('');

    var result = inputString != inputStringReverse ? false : true;

    console.log(inputString);
    console.log(inputStringReverse);
    console.log(result);
    return result;
}

isPolindrome('дод доД');
