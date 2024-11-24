import React, { useState } from 'react';

const Test = () => {
  const [isInitial, setIsInitial] = useState(true); // Tracks which statement to show

  const handleClick = () => {
    setIsInitial(!isInitial); // Toggles the statement on each click
  };

  return (
    <div>
      <p>{isInitial ? "This is the initial full statement." : "This is the updated full statement after clicking."}</p>
      <button onClick={handleClick}>Click to Toggle Statement</button>
    </div>
  );
};

export default Test;



















// import React,{useState} from 'react'

// const Test = () => {
//     const [word,setWord]=useState("old word")
//     const handleClick=()=>{
//         setWord("New Word")
//     }
//     const handlemouse=()=>{
//         setWord("old Word")
//     }
//   return (
//     <div>
//       <p>{word}</p>
//       <button 
//         onMouseOver={handleClick} 
//         onMouseOut={handlemouse}
//       >
//         Read More
//       </button>
//     </div>
//   )
// }

// export default Test
