import React from "react"

export const Counters=({icon, number, texts})=> {
  
    return (
        <div className="count">
        <div className="info">
          <div className="info-text1">
            {icon && <span className="info-icon">{icon}</span>}
            <span>{number}</span>
          </div>
          <div className="info-text2">
            {texts}
          </div>
        </div>
      </div>
    )
}
