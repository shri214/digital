import React from 'react'

export const GroupDes=({num, ui, desc})=> {
  return (
    <div className="groups">
    <h3 className="number">{num}</h3>
    <div className="des">
      <span className="uiux">{ui}</span>
      <span className="group-des">
       {desc}
      </span>
    </div>
  </div>
  )
}
