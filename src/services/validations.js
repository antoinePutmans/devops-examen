// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const is8CharMin = (label) => label.length >= 8;

exports.isEmpty = isEmpty;
exports.is8CharMin = is8CharMin;
