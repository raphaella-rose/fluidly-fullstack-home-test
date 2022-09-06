const checkType = (expect, actual) => {
    if (typeof expect != typeof actual) {
        throw `Expected type ${typeof expect} but found type ${typeof actual}`;
    }
    return typeof expect;
}

const assertEquals = (expect, actual) => {
    if (checkType(expect, actual) == "string" && expect != actual) {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (checkType(expect, actual) == "number" && expect != actual) {
        throw `Expected ${expect} but found ${actual}`
    } 
}

module.exports = assertEquals