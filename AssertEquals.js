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
        } else if (typeof this.expect == "number") {
            throw this.throwError.number(this.expect, this.actual);
        } else {
            throw `Expected array length ${expect.length} but found ${actual.length}`
        }
    }
}

module.exports = AssertEquals;