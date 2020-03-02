import React, { useContext } from 'react';
import {NameContext} from './App';


function CountVowels() {
    const value = useContext(NameContext)
    let vowels = 0;
    let vowel_list = 'aeiouAEIOU';

    function countVowel(name){
        for(let i = 0; i < name.length ; i++)
            
            if (vowel_list.includes(name.charAt(i))){
                vowels += 1;
            }
            return vowels;
    }

    return (
            <>
                <p>the name is {value}</p>
                <p>The amount of vowels inside the word is: {countVowel(value)}!</p>
            </>
    );
  }

  export default CountVowels;