const assertEquals = (expect, actual) => {
    if (expect != actual) {
        throw `Expected "${expect}" but found "${actual}"`
    }
  
    
}

module.exports = assertEquals