import React from "react";

export const DropdownList = ({arr}) => {
  console.log(arr);
  return (
    <>
      {arr.map((val, ind)=>{
        return <li key={ind} className="arrInd"><span className="slash dNone">/</span>{val}</li>
      })}
    </>
  );
};


