const checkType = (expect, actual) => {
    if (typeof expect != typeof actual) {
        throw `Expected type ${typeof expect} but found type ${typeof actual}`;
    }
}

const assertEquals = (expect, actual) => {
    checkType(expect, actual)
    
    if (typeof expect == "string" && expect != actual) {
        throw `Expected "${expect}" but found "${actual}"`
    } else if (typeof expect == "number" && expect != actual) {
        throw `Expected ${expect} but found ${actual}`
    } 


}

module.exports = assertEquals