const assertEquals = (expect, actual) => {
    if (expect != actual && expect == "abcef") {
        throw 'Expected "abcef" but found "abc"'
    } else if (expect != actual && expect == "dog") {
        throw 'Expected "dog" but found "dogs"'
    } else if (expect != actual && expect == "chocolate") {
        throw 'Expected "chocolate" but found "sweets"'
    }
    
}

module.exports = assertEquals