// 58. Length of Last Word

var s = "b   a    ";
var s1= "hello World"

function lengthOfLastWord(s) {
    // if (s[s.length-1] == " ") {
    //     for (var i = s.length; i >= 0; i--) {
    //         if (s[i] == " ") {
    //             break;
    //         }
    //     }
    //     return s.length - (i + 1) - 1;
    // } else {
    //     for (var i = s.length; i >= 0; i--) {
    //         if (s[i] == " ") {
    //             break;
    //         }
    //     }

    //     return s.length - (i + 1);
    // }

    if (s[s.length - 1] != ' ') {
        for (var i = s.length - 1; i >= 0; i--) {
            if (s[i] == ' ') {
                break;
            }
        }
        return s.length - (i + 1);
    }else{
        var firstIndex = 0;
        for(var i = s.length - 1; i >= 0; i--){
            if(s[i]!= ' '){
                firstIndex = i;
                break;
            }
        }

        for(var j = firstIndex;j>=0;j--){
            if(s[j] == ' '){
                break;
            }
        }

        return firstIndex - j;
    }
}


console.log(lengthOfLastWord(s))