const assertEquals = (expect, actual, throwError) => {
    assertType(expect, actual)

    if (typeof expect == "object") {
        handleArray(expect, actual)
    }

    isEqual(expect, actual)

}

const isEqual = (expect, actual, throwError) => {
    if (expect !== actual) {
        throwError(expect, actual, throwError)
    }
}

const handleArray = (expect, actual) => {
 
    assertArrayLength(expect, actual)
    assertArrayEquals(expect, actual)
    
}

const assertArrayEquals = (expect, actual) => {
    for (let i = 0; i < expect.length; i++) {
        isEqual(expect[i], actual[i])
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

const throwError = (expect, actual, throwError) => {
    console.log(throwError.string())
    if (typeof expect == "string") {
        throw throwError.string();
    } else if (typeof expect == "number") {
        throw `Expected ${expect} but found ${actual}`
    } else {
        throw `Expected array length ${expect.length} but found ${actual.length}`
    }
}




module.exports = assertEquals