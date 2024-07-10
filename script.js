//Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Emmanuel"));
console.log(reverseString("Dontlike"));
console.log(reverseString("JavaScript"));

//Count Characters
function square(num) {
  return num * num;
}

console.log(square(2));

//Capitalize words

function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeWords("Emmanuel"));
console.log(capitalizeWords("hate"));
console.log(capitalizeWords("Javascript"));

//Array
function amount(arr) {
  return arr.length === 0 ? null : Math.max(arr);
}

function amount(arr) {
  return arr.length === 0 ? null : Math.min(arr);
}

var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Maximum:", amount(9));
console.log("Minimum:", amount(1));

//Sum of Array
function sumarray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumarray([1, 3, 4]));
//Filter Array
function filterarray(arrayfilter) {
  let evenarr = [];
  for (i = 0; i < arrayfilter.length; i++)
    if (arrayfilter[i] % 2 == 0) {
      evenarr.push(arrayfilter[i]);
    }

  return evenarr;
}

console.log(filterarray([2, 4, 6, 7, 11]));

// //Factorial

function cal(number) {
  return number + number;
}
console.log(cal(5));

//prime number

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrime(17));

//Fibonacci Sequence

function term(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }
  return sequence;
}

let numTerms = 10;
console.log("Fibonacci Sequence:", term(numTerms));
