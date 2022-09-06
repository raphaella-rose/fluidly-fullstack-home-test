class ThrowError {
    string(expect, actual) {
        return `Expected "${expect}" but found "${actual}"`
    }

    number(expect, actual) {
        return `Expected ${expect} but found ${actual}`
    }

    type(expect, actual) {
        return `Expected type ${typeof expect} but found type ${typeof actual}`
    }
}

module.exports = ThrowError;