function reverseString(str){
    var reverse = ""                //string default value ekta khali string
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Alien."; 
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("ki khabo vai, khida lagche");
console.log(foodVlog);