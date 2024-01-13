import React from 'react'
import { SvgComponent1 } from './SvgComponent1'

export const SingleCard=({text1, text2, text3, svg})=> {
  return (
    <div className="card">
    <div className="c1">
      <div className="card-content">
        <div className="arrow-icons">
          <div className="marketing">
            {text1}
            <br />
            {text2}
          </div>
          <span className="material-icons north_east">north_east</span>
        </div>
        <div className="svg">
          <SvgComponent1 num={svg} />
        </div>
        <div>
          <h3>
            <span className="ui_ux">
             {text3}
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  )
}
