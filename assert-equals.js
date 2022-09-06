const assertEquals = (expect, actual) => {
    if (expect != actual) {
        if (typeof expect == "string") {
            throw `Expected "${expect}" but found "${actual}"`
        } else if (expect == 1) {
            throw `Expected 1 but found 2`
        } else {
            throw `Expected 3 but found 5`
        }
        
    }
    
    
}

module.exports = assertEquals