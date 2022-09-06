class AssertEquals {
    constructor(expect, actual, throwError) {
        this.expect = expect;
        this.actual = actual;
        this.throwError = throwError;
    }

    isEqual() {
        this.assertType();
        if (this.expect !== this.actual) {
            this.handleError()
        }
    }

    assertType() {
        if (typeof this.expect != typeof this.actual) {
            throw this.throwError.type(this.expect, this.actual);
        }
    }

    handleError() {
        if (typeof this.expect == "string") {
           throw this.throwError.string(this.expect, this.actual);
        } else if (typeof this.expect == "number") {
            throw this.throwError.number(this.expect, this.actual);
        } else {
            throw `Expected array length ${this.expect.length} but found ${this.actual.length}`
        }
    }
}

module.exports = AssertEquals;