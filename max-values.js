var business = 650;
var minister = 350;
var sochib  = 850;

var max = Math.max(business, minister, sochib)
console.log(max);

/** //max value ber korar way no 1
if(business > minister){
    if(business > sochib){
        console.log("Business is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}
else{
    if(minister>sochib){
        console.log("Minister is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}   */