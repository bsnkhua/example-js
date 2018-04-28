function negativeFilter(input) {

    if (Array.isArray(input)) {
        var newArray = [];
        var error = 'invalid type';

        for(var i = 0; i < input.length; i++) {

            if(!Number.isInteger(input[i])) {
                return error;
            }
    
            if(isPositive(input[i])) {
                newArray.push(input[i]);
            }
        }

        
        console.log(newArray);
        return newArray;
    }


    return error;
}

function isPositive(num) {
    return num >= 0;
}

negativeFilter();