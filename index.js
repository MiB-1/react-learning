const sampleInput = "shoulde2r ba1ck hand4 3arm";

function robotAssembly(stringArray) {
    // const sortedArray = {};
    // if(stringArray.length === 0) {
    //     return []
    // }

    return stringArray.sort((a, b) => (+a.match(/\d+/)[0]) - (+b.match(/\d+/)[0]));
    // console.log(stringArray)
    // for(let i of stringArray) {
    //     for(let x=0; x<i.length; x++) {
    //         if(!isNaN(i[x])) {
    //             sortedArray[+i[x]] = i;
    //         }
    //     }
    // }
    // return Object.keys(sortedArray).map(key => sortedArray[key]);
}

console.log(robotAssembly(sampleInput.split(" ")).join(" "))