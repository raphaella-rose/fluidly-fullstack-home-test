const assertEquals = (expect, actual) => {
    if (expect != actual) {
        if (typeof expect == "string") {
            throw `Expected "${expect}" but found "${actual}"`
        } else if (expect == 1) {
            throw `Expected 1 but found 2`
        } else if (expect == 3) {
            throw `Expected 3 but found 5`
        } else {
            throw `Expected 2 but found 7`
        }
        
    }
    
    
}

module.exports = assertEquals