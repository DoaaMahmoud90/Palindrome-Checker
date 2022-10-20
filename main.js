function isPalindrome(str){
str= str.toLowerCase(); //get all the alphabets low
let arr = str.match(/[a-zA-z0-9]/g);// get alphabets from the string
let limit = arr.length-1;
for(let i = limit; i >= 0; i --){
  if (arr[limit-i]  !== arr[i]){
    return false;
  }
}
return true;
}
console.log(isPalindrome('Top spot'));