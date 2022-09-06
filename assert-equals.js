const assertEquals = (expect, actual) => {
    if (expect != actual) {
        throw 'Expected "abcef" but found "abc"'
    }
    
}

module.exports = assertEquals