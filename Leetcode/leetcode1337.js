//Create Matrix

// let mat = [];
// for (var i = 0; i < 5; i++) {
//     mat[i] = [];
//     for (var j = 0; j < 5; j++) {
//         mat[i][j] = Math.random().toFixed(2)
//     }
// }

var mat = [[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]]


var count = 0;
var output = [];
var k = 3;
function weakestRow(mat) {
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        output.push(count);
        count = 0;
    }

    return output;
}

console.log(weakestRow(mat))

var weak = [];
for (var i = 0; i < output.length; i++) {
    weak[i] = [];
    weak[i][0] = i;
    weak[i][1] = output[i]
}

console.log(weak)

var outputMap = new Map(weak);
console.log(outputMap)
const mapSort1 = new Map([...outputMap.entries()].sort((a, b) => a[1] - b[1])); //entires is same as for...of
console.log(mapSort1);
let keys =[ ...mapSort1.keys() ].slice(0,3);
console.log(keys)
