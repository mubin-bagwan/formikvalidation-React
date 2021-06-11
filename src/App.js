import React,{Suspense,lazy} from "react";
// import Form from "./component/Form1";
//  import Hooksvalidation from "./HooksValidation/Form";
//import Dropdown from "./Dropdown/app";
// import Status from "./Dropdown/app1"
// import ServerData from "./JSON Data/index";
// import BasicSorting from "./JSON Data/MaterialTable";
// import DropDown from "./Dropdown Lazy Loading/index";
import ReactFileViewer from "./React-file-viewer/index";

 const DropDown=lazy(()=>import("./Dropdown Lazy Loading/index"))


class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Form/> */}
         {/* <Hooksvalidation/> */}
         {/* <ServerData/> */}
      {/* <Dropdown/>*/}
      {/* <BasicSorting /> */}
      {/* <Suspense fallback={<div>Loading....</div>}>
        <DropDown/>
      </Suspense> */}
      <ReactFileViewer />
     
       
      </div>
    )
  }
 }
 

 export default App;