'use strict';

function alphabetPosition(text) {
  const str = text.toLowerCase();
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let alphabetIndex = [];

  //   console.log(str)

  // Loop through str length
  for (let i = 0; i < str.length; i++) {
    // store alphabet index number of corresponding letter in a variable
    let indexNum = alphabet.indexOf(str[i]);

    // if indexOf returns -1 (not found) then continue to the next item
    if (indexNum === -1) {
      continue;
    } else {
      // else push the alphabet index of corresponding letter into alphabetIndex array
      alphabetIndex.push(indexNum + 1);
    } // end if/else
  } // end for

  return alphabetIndex.join(' ');
} // end function

// YES this could be refactored but it works for now!
