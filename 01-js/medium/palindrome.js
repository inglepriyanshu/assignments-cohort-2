/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

  function isPalindrome(str) {
  let str2 = str.toLowerCase();
  let arr = str2.match(/[\w]/g)
 if(!arr)
 return true;
  let n = arr.length;
  for( let i =0; i< n/2;i++)
  {
    if(arr[i]!=arr[n-i-1])
    {return false;}
  }
  return true;

  }

module.exports = isPalindrome;
