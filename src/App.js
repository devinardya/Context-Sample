import React from 'react';
import CountConsonants from './CountConsonant';
import CountVowels from './CountVowels';
import './App.css';

//better write the namecontext createContext on another file and import it to parents and child components
export const NameContext = React.createContext("Andreas"); //Andreas is the default value of the Context

function ParentComponent() {
  return (
    <div className ="parent">
      <CountVowels />
      <CountConsonants />
    </div>
  );
}

function App() {
  /* The value that get passed to the child components. If this is empty then the default value will be used
    the value of the Provider can be something dynamic (states, variables, etc)
   */

 return (
    <NameContext.Provider value="Viktor"> 
        <ParentComponent />
    </NameContext.Provider>
 );
 
}


export default App;
