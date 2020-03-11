//float means dosomik, ex: 2.12345
//intijar means purno number, ex: 1,99,57

var num = 2.1245;
var result = Math.floor(num);  //floor means nicher songkha
var result2 = Math.ceil(num);  //ceil means celing, uporer songkha
var result3 = Math.round(num);  //round means .5 ba tar beshi hole uporer songkha hobe, nahoy nicher hbe
//console.log(result2);

/**var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output); */

for(var i = 0; i<10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}