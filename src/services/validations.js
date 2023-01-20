// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const is8CharMin = (label) => label.length >= 8;

const containsSpecialsChar = (label) => {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(label)) {
        return true;
    } else {
        return false;
    }
};

const containsNumbers = (label) => {
    return /[0-9]/.test(label);
};

exports.isEmpty = isEmpty;
exports.is8CharMin = is8CharMin;
exports.containsSpecialsChar = containsSpecialsChar;
exports.containsNumbers = containsNumbers;