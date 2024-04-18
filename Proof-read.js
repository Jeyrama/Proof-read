/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. 
It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. 

Write a function which will:
  a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
  b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/


// Solution

function proofread (str) { 
  str = str.replace(/ie/gi, 'ei');
  str = str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();
  for ( i = 0; i < str.length; i++){
    if ( str.charAt(i) == '.' ){
        str = str.slice(0, i+2) + str.slice(i+2, i+3).toUpperCase() + str.slice(i+3, str.length)
    }
  };
  return str
} 