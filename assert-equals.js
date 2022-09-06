const assertEquals = (expect, actual) => {
    checkType(expect, actual)
    if (expect != actual) {
        throwError(expect, actual)
    } 
}

const checkType = (expect, actual) => {
    if (typeof expect != typeof actual) {
        throw `Expected type ${typeof expect} but found type ${typeof actual}`;
    }
}

const throwError = (expect, actual) => {
    if (typeof expect == "string") {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (typeof expect == "number") {
        throw `Expected ${expect} but found ${actual}`
    } 
}



module.exports = assertEquals