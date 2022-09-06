const assertEquals = (expect, actual) => {
    checkType(expect, actual)
    if (expect != actual) {
        throwError(expect, actual)
    } 
    if (Array.isArray(expect)) {
        if (expect.length != actual.length) {
           throw 'Expected array length 2 but found 3'
        }
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