
const assertEquals = (expect, actual) => {
    if (typeof expect == "string" && expect != actual) {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (typeof expect == "number" && expect != actual) {
        throw `Expected ${expect} but found ${actual}`
    } else if (typeof expect != typeof actual) {
        throw `Expected type number but found type string`;
    }
}

module.exports = assertEquals