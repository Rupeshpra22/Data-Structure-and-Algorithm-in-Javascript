// 1331. Rank Transform of an Array

var arr = [40,10,20,30]
var arrayIndex = [];

var sortedArray = arr.sort();
var output = [];
function transform(arr) {
var arrcopy = [...arr];
    for (var i = 0; i < sortedArray.length; i++) {
        for (var j = 0; j < arrcopy.length; j++) {
            if (sortedArray[i] == arrcopy[j]) {
                arrayIndex[j] = i+1;
                break;
            }
        }
    }
    for (var k = 0; k < arrayIndex.length; k++) {
        output[k+1] = arrayIndex[k+1]
    }
}

transform(sortedArray)
for (var z = 0; z < arrayIndex.length; z++) {
    console.log(arrayIndex[z])

}