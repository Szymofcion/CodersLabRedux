// List
import React from "react";
import { useSelector } from "react-redux";
const List = () => {
  const results = useSelector(state => state.results);

  return 
    // <>
    //   <div>
    //     <ul>
    //       {results.map((result, index) => (
    //         <li key={index}>{result}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
  
};

export default List;
