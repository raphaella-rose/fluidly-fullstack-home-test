const assertEquals = (expect, actual) => {
    if (expect != actual) {
        if (typeof expect == "string") {
            throw `Expected "${expect}" but found "${actual}"`
        } else {
            throw `Expected 1 but found 2`
        }
        
    }
    
    
}

module.exports = assertEquals