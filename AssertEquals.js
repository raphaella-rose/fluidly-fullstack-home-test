class AssertEquals {
    constructor(expect, actual, throwError) {
        this.expect = expect;
        this.actual = actual;
        this.throwError = throwError;
    }

    isEqual() {
        if (this.expect !== this.actual) {
            this.handleError()
        }
    }

    handleError() {

        if (typeof this.expect == "string") {
           throw this.throwError.string(this.expect, this.actual);
        } else if (typeof expect == "number") {
            throw `Expected ${expect} but found ${actual}`
        } else {
            throw `Expected array length ${expect.length} but found ${actual.length}`
        }
    }
}

module.exports = AssertEquals;