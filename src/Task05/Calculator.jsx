import React from 'react'
import Sum from './Sum'
import Sub from './Sub'
import Div from './Div'
import Multi from './Multi'


function Calculator(){
     return(
         <React.Fragment>
          <ul>
              <li>{Sum(30,3)}</li>
              <li>{Sub(30,3)}</li>
              <li>{Div(10,3)}</li>
              <li>{Multi(30,3)}</li>
          </ul>

         </React.Fragment>
     )
}
export default Calculator;