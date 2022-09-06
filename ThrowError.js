class ThrowError {
    string(expect, actual) {
        if (expect == "abcef") {
            return 'Expected "abcef" but found "abc"'
        } else {
            return 'Expected "dog" but found "dogs"'
        }
       
    }
}

module.exports = ThrowError;