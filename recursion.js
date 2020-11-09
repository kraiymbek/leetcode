// const power = (x, y) => {
//     if(!y) return 1;
//     return x * power(x, y - 1);
// };

// console.log(power(5, 3))

// ---------------------------------------

// const factorial = (x) => {
//     if(!x) return 1;
//     return x * factorial(x - 1);
// };
//
// console.log(factorial(1))

// ----------------------------------------

// const productOfArray = (arr) => {
//     if (!arr.length) return 1;
//     return arr[0]*productOfArray(arr.slice(1))
// };
//
// console.log(productOfArray([1,2,3,10]))

// const recursiveRange = (num) => {
//     if (!num) return 0;
//     return num + recursiveRange(num - 1)
// };
//
// console.log(recursiveRange(6))

// const fib = (num) => {
//     if (num <= 2) return 1;
//     return fib(num - 2) + fib(num - 1)
// };
//
// console.log(fib(35))`

// 1 1 2 3 5 8

// const reverse = (str) => {
//     if (str.length <= 1) return str;
//     console.log(str[0])
//     return reverse(str.slice(1)) + str[0]
// };
//
// console.log(reverse('awe'))

// const isPalindrome = (str) => {
//     if (str.length === 1) {
//         console.log("Str 1", str)
//         return true;
//     }
//     if (str.length === 2) {
//         console.log("Str 2", str)
//         return str[0] === str[1];
//     }
//     if (str[0] === str.slice(-1)) {
//         console.log("Str 3", str)
//         return isPalindrome(str.slice(1, -1))
//     }
//     return false;
// };

// console.log(isPalindrome('kazak'))

// const isOdd = val => val % 2 !== 0;
// const someRecursive = (arr, callback) => {
//     if (arr.length === 0) return false;
//     if (callback(arr[0])) return true;
//     return someRecursive(arr.slice(1), callback);
// };
//
// console.log(someRecursive([4,6,8], isOdd))

// const flatten = (arr) => {
//     let newArray = [];
//     for(let i = 0; arr.length > i; i++) {
//         if (Array.isArray(arr[i])) {
//             newArray = [...newArray, ...arr[i]]
//         } else {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// };
//
// console.log(flatten([1, 2, 3, [4, 5] ]))

// const capitalizeFirst = (arr) => {
//     if (arr.length === 1) {
//         return [arr[0].toUpperCase()];
//     }
//     let res = capitalizeFirst(arr.slice(0, -1));
//     res.push(arr.slice(arr.length-1)[0].toUpperCase());
//     return res;
// };
//
// console.log(capitalizeFirst(['car', 'tako']))

// const tribonacci = (n) => {
//         if (n === 0) return 0;
//         if (n === 1) return 1;
//         if (n === 2) return 1;
//         return tribonacci(n - 3) + tribonacci(n - 2)  + tribonacci(n - 1);
// };


// const tribonacci = (n) => {
//         if (n === 0) return 0;
//         if (n === 1) return 1;
//         if (n === 2) return 1;
//         return tribonacci(n - 3) + tribonacci(n - 2)  + tribonacci(n - 1);
// };

// const tribonacci = (n) => {
//     let arr = [0, 1, 1];
//
//     if (n < 3) {
//         return arr[n]
//     }
//
//     for (let i = 0; i < n - 2; i++) {
//         arr.push(arr[i] + arr[i + 1] + arr[i + 2])
//     }
//
//     return arr[n]
// };

// const tribonacci = (n) => {
//     let arr = [0, 1, 1];
//
//     if (n < 3) {
//         return arr[n]
//     }
//
//     for (let i = 0; i < n - 2; i++) {
//         arr.push(arr[i] + arr[i + 1] + arr[i + 2])
//     }
//
//     return arr[n]
// };

const defangIPaddr = (str) => {


    return arr[str]
};

defangIPaddr



//1 + 1 + 0 + 1 + 1
console.log(tribonacci(4))