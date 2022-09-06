class ThrowError {
    string(expect, actual) {
        return `Expected "${expect}" but found "${actual}"`
    }
}

module.exports = ThrowError;