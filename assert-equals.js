const assertEquals = (expect, actual) => {
    checkType(expect, actual)
    if (expect != actual) {
        throwError(expect, actual)
    } 
    if (Array.isArray(expect)) {
        if (expect.length != actual.length && expect.length == 2) {
           throw 'Expected array length 2 but found 3'
        } else if (expect.length == 3) {
            throw 'Expected array length 3 but found 4'
        } else {
            throw 'Expected array length 5 but found 4'
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