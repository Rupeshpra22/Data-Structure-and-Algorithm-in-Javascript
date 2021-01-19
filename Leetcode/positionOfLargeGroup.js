// 830. Positions of Large Groups

var s = "aaa";
var output = [];
var count = 1;
var arr = [];

function Position(s) {
    for (var i = 0; i <= s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            count++;
        } else {
            if (count >= 3) {
                arr.push((i - count) + 1);
                arr.push(i);
                output.push(arr);
            }
            count = 1;
            arr = []
        }
    }
}

Position(s);
for (var z = 0; z < output.length; z++) {
    console.log(output[z]);
}