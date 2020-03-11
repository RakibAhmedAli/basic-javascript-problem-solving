var speech = "I am a good person. i don't snore at night";
//console.log(speech.length)   //length ber kora jay
//console.log(speech[9]);        //position ber kora jay

var count = 0;

for(var i = 0; i<speech.length; i++){
    var char = speech[i];
    //console.log(char);
    if(char == " "){
        count++;
    }
}
count++;      //for last word count
console.log(count);