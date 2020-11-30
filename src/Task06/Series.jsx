import React from 'react'
// import Cal from './Task05/Calculator'


function Series(props){
     return(
         <React.Fragment>
           <div className="cards">
             <div className="card">
               <img src={props.imgsrc} alt="myPic" className="card__img"/>
                <div className="card__info">
                  <span className="card__category">A Netflix Orignal Movies</span>
                   <h3 className="card__title">{props.sname}</h3>
                   <a href={props.link} target="_blank">
                       <button>Watch Now</button>
                   </a>
                </div>
             </div>
           </div>
         </React.Fragment>
     )
}
export default Series;