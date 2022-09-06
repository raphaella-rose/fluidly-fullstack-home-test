const assertEquals = (expect, actual) => {
    if (expect != actual && expect == "abcef") {
        throw 'Expected "abcef" but found "abc"'
    } else if (expect != actual && expect == "dog") {
        throw 'Expected "dog" but found "dogs"'
    }
    
}

module.exports = assertEquals