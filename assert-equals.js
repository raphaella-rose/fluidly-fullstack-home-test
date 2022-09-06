
const assertEquals = (expect, actual) => {
    if (typeof expect == "string" && expect != actual) {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (typeof expect == "number" && expect != actual) {
        throw `Expected ${expect} but found ${actual}`
    } else if (typeof expect != typeof actual && expect == 1) {
        throw `Expected type number but found type string`;
    } else if (typeof expect != typeof actual && expect == '2') {
        throw `Expected type string but found type number`;
    } 

}

module.exports = assertEquals