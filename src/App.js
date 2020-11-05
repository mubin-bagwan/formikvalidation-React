import React from "react";
// import Form from "./component/Form1";
//  import Hooksvalidation from "./HooksValidation/Form";
//import Dropdown from "./Dropdown/app";
// import Status from "./Dropdown/app1"
import ServerData from "./JSON Data/index"

 


class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Form/> */}
         {/* <Hooksvalidation/> */}
         <ServerData/>
      {/* <Dropdown/>*/}
  
       
      </div>
    )
  }
 }
 

 export default App;