function firstNonRepeatedChar(str) {
 // Write your code here
 let pre = false;
for(let i=1;i<str.length-1;i++){
    // console.log(str.charAt(i) + " " + str.charAt(i+1));
    if(str.charAt(i) != str.charAt(i-1) && str.charAt(i) != str.charAt(i+1)){
        pre = true;
        return(str.charAt(i));
    }
}
if(!pre){
    if(str.charAt(0) != str.charAt(1)){
        return(str.charAt(0));
    }
    else if(str.charAt(str.length-1) != str.charAt(str.length-2)){
        return(str.charAt(str.length-1));
    }
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
