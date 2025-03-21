function stringLength(myString, StringLength) {
  console.log(StringLength < myString.length || myString.length === StringLength);
}

function isPalindrome(myString) {
  let newString = myString.trim().toLowerCase();
  let reversed = newString.split("").reverse().join("");
  console.log(newString === reversed);
}

function sumFunc(myString) {

  if (typeof myString !== 'string' && typeof myString !== 'number') {
    console.log('is not a string or number');
    return;
  }

  myString = myString.toString();

  let sum = 0;
  let hasDigits = false;

  for (let char of myString) {

    if (!isNaN(char) && char !== ' ') {
      sum += parseInt(char);
      hasDigits = true;
    }
  }

  if (!hasDigits) {
    console.log(NaN);
  } else {
    console.log(sum);
  }
}

stringLength('строка', 10);
isPalindrome('строка');
sumFunc('abc1234');
sumFunc('abc');


