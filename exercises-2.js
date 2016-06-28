// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
    } else if (secondNum > firstNum) {
        return secondNum;
    }

    //...
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(firstNum, secondNum, thirdNum) {
    if ((firstNum > secondNum) && (firstNum > thirdNum)) {
        return firstNum;
    } else if ((secondNum > firstNum) && (secondNum > thirdNum)) {
        return secondNum;
    } else if ((thirdNum > firstNum) && (thirdNum > secondNum)) {
        return thirdNum;
    }
} //...


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
        return true;
    } else {
        return false;
    }
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase) {
    var result = phrase.split(''); //makes array of individual letters
    // console.log(result);
    var newPhrase;
    for (i = 0; i < result.length; i++) {
        if ((result[i] !== 'a') && (result[i] !== 'e') && (result[i] !== 'i') && (result[i] !== 'o') && (result[i] !== 'u') && (result[i] !== ' ')) {
            newPhrase = result[i].concat('o' + result[i]);
          } else {
            newPhrase = result[i];
          }
          // newPhrase=result[i] += (result.join());//<----- on the right track
          console.log(newPhrase);
          // console.log(String(newPhrase=Array.of(result[i].concat('o' + result[i]))));
          // console.log(newPhrase.join());
          // console.log((Array.of(newPhrase)).join);
          // console.log(typeof(newPhrase));

        }
    }

translate('crazy like a fox');





// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse(){
//     //...
// }
