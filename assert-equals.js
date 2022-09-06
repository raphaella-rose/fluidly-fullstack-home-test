const assertEquals = (expect, actual) => {
    if (expect != actual) {
        if (typeof expect == "string") {
            throw `Expected "${expect}" but found "${actual}"`
        } else {
            throw `Expected ${expect} but found ${actual}`
        } 
        
    }
    
    
}

module.exports = assertEquals