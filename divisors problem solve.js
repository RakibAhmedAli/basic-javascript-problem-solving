// rules 01 

var n = 145;

var range = Math.ceil(Math.sqrt(n));

var divisors = "";

for (var i = 1; i <= range; i++){
    if (n % i == 0){
        if (i == n/i){
            divisors += i + " ";
        } else {
                divisors += i + " " + (n/i) + " ";
        }
    }
}

console.log(divisors);


// rules 02 


var maxValue = 144;
var divided;
var divisorList = "";
 
for ( var i=1; i<=maxValue; i++ ) {
    divided = maxValue % i;
    if ( divided == 0 ) {
        divisorList += i + " ";
        // divisorList = divisorList + i + " ";
    }
}
console.log("Divisors of", maxValue, "is =>" , divisorList);