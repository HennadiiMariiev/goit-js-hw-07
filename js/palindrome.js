function palindrome(str) {
    return [...str.toLowerCase().replace(/[^A-Za-z1-9]+/g, '')]
                    .reduce((acc, current, index, arr) => {
                        return current !== arr[arr.length - index - 1]
                            ? acc = false
                            : acc
                    }, true);

    return arr;
    // let isPalindome = true;
    // for(; arr.length > 1; ) {
    //     arr.pop() === arr.shift() 
    //         ? isPalindome 
    //         : isPalindome = false;
    // }
    // return isPalindome;
  }
  
  
 console.log(palindrome("eye"));
 console.log(palindrome("not a palindrome"));
 console.log(palindrome("My age is 0, 0 si ega ym."));
 console.log(palindrome("1 eye for of 1 eye."));