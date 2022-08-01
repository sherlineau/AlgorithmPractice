const errorResponseData = {
    "name": {
        "name": "ValidatorError",
        "message": "Title is required",
        "properties": {
            "message": "Title is required",
            "type": "required",
            "path": "title",
            "value": ""
        },
        "kind": "required",
        "path": "title",
        "value": ""
    },
    "artist": {
        "name": "ValidatorError",
        "message": "Artist is required",
        "properties": {
            "message": "Artist is required",
            "type": "required",
            "path": "artist",
            "value": ""
        },
        "kind": "required",
        "path": "artist",
        "value": ""
    }
}

const errMsg = {}

for(const eachKey in errorResponseData){
// console.log(errorResponseData[eachKey].message) 
    errMsg[eachKey] = errorResponseData[eachKey].message
// errorResponseData.title
// errorResponseData.artist
}

console.log(errMsg)
// given an error response object, return an array of all the messages of the errors.

errMsg["name"]? console.log(errMsg["name"]) : console.log("no errors")