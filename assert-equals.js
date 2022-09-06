const assertEquals = (expect, actual) => {
    assertType(expect, actual)
    if (Array.isArray(expect)) {
        assertArrayLength(expect, actual)
    }
    
    if (expect != actual) {
        throwError(expect, actual)
    } 
    
}

const assertArrayLength = (expect, actual) => {
    if (expect.length != actual.length) {
        throwError(expect, actual)
     } 
}

const assertType = (expect, actual) => {
    if (typeof expect != typeof actual) {
        throw `Expected type ${typeof expect} but found type ${typeof actual}`;
    }
}

const throwError = (expect, actual) => {
    if (typeof expect == "string") {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (typeof expect == "number") {
        throw `Expected ${expect} but found ${actual}`
    } else {
        throw `Expected array length ${expect.length} but found ${actual.length}`
    }
}




module.exports = assertEquals