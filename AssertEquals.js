class AssertEquals {
    constructor(expect, actual, throwError) {
        this.expect = expect;
        this.actual = actual;
        this.throwError = throwError;
    }

    isEqual() {
        this.assertType();
        if (typeof this.expect == "object") {
            this.handleArray()
        }

        this.assertCharacter();
    }

    assertType() {
        if (typeof this.expect != typeof this.actual) {
            throw this.throwError.type(this.expect, this.actual);
        }
    }

    assertCharacter(expect = this.expect, actual = this.actual) {
        if (expect !== actual) {
            this.handleError(expect, actual)
        }
    }

    handleArray() {
        this.assertArrayLength();
        this.assertArray();
    }

    assertArrayLength() {
        if (this.expect.length != this.actual.length) {
            this.handleError(this.expect, this.actual)
         } 
    }

    assertArray() {
        console.log("here", this.expect)
        for (let i = 0; i < this.expect.length; i++) {
            this.assertCharacter(this.expect[i], this.actual[i])
        }
    }

    handleError(expect = this.expect, actual = this.actual) {
        if (typeof expect == "string") {
           throw this.throwError.string(expect, actual);
        } else if (typeof expect == "number") {
            throw this.throwError.number(expect, actual);
        } else {
            throw this.throwError.arrayLength(expect, actual);
        }
    }
}

module.exports = AssertEquals;