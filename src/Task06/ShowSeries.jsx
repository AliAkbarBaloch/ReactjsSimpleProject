import React from 'react'
import Series from './Series'
import Sdata from './Sdata'

function List(val){
    return(
        <Series 
        imgsrc={val.imgsrc}
        sname={val.sname}
        link={val.link}
     />
    )
}

function ShowSeries(){
   return(
    <React.Fragment>
     <h1 className="heading_style">List of Top 6 Netflix Movies in 2020</h1>
     {Sdata.map(List)}
    
  </React.Fragment>
   )
}
export default ShowSeries;