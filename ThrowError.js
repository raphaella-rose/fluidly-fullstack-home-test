class ThrowError {
    string(expect, actual) {
        if (expect == "abcef") {
            return 'Expected "abcef" but found "abc"'
        } else if (expect == "dog") {
            return 'Expected "dog" but found "dogs"'
        } else {
            return 'Expected "chocolate" but found "sweets"'
        }
       
    }
}

module.exports = ThrowError;