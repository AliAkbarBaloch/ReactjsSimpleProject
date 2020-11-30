import React from 'react'
import Sho from './Task06/ShowSeries'
import './index.css'
// import Cal from './Task05/Calculator'


function App(props){
     return(
         <React.Fragment>
           <Sho/>
         </React.Fragment>
     )
}
export default App;

// .........Challange03.........
// import React from 'react'
// import './index.css'

// const style={};

// let t=new Date().getHours();
// let flag="";
//  if(t >= 1 && t < 12){
//   flag="Good Morning";
//   style.color='green';
//  }
//  else if(t >= 12 && t < 19){
//   flag="Good AfterNoon";
//   style.color='orange';
//  }
//  else{
//   flag="Good Night";
//   style.color='black';
//  }

// function App(){
//    return(
//        <React.Fragment>
//          <p>Hello Sir,
//          <span style={style}>{flag}</span></p>
//        </React.Fragment>
//    )
// }

// export default App;