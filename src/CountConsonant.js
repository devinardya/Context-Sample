import React from 'react';
import {NameContext} from './App';

function CountConsonants() {
    let vowels = 0;
    let vowel_list = 'aeiouAEIOU';

    function countConsonant(name){
        for(let i = 0; i < name.length ; i++)
            
            if (!vowel_list.includes(name.charAt(i))){
                vowels += 1;
            }
            return vowels;
    }

    return (
      <NameContext.Consumer>
        {value => (
            <p>The amount of consonant inside the word is: {countConsonant(value)}!</p>
        )}
      </NameContext.Consumer>
    );
  }

  export default CountConsonants;