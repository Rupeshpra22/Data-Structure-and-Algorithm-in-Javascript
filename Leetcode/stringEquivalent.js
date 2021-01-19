// 1662. Check If Two String Arrays are Equivalent

var word1 = ["abd", "c"];
var word2 = ["ad", "bc"];

function stringEquivalent(word1, word2) {
    var concatenatedword1 = '';
    var concatenatedword2 = '';

    for (var i = 0; i < word1.length; i++) {
        concatenatedword1 += word1[i];
    }

    for (var i = 0; i < word2.length; i++) {
        concatenatedword2 += word2[i];
    }

    return concatenatedword1 == concatenatedword2 ? true : false;
}

console.log(stringEquivalent(word1, word2));


