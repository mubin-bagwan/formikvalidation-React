// import React,{useState,useEffect} from "react"
// import MaterialTable from "material-table";

// export default function BasicSorting() {

//     const [data, setData]=useState([]);

//     useEffect(()=>{
//         fetch(`http://localhost:3000/user_info`)
//         .then((response)=>response.json())
//         .then((json)=>setData(json))
//     },[])


//     return (
//       <MaterialTable
//         title="Contact Table"
//         columns={[
//           { title: 'id', field: 'id' },
//           { title: 'First Name', field: 'first_name' },
//           { title: 'Last Name', field: 'last_name', },
//           {
//             title: 'Gender',
//             field: 'gender',
//           },
//           {
//             title: 'IP Address',
//             field: 'ip_address',
//           },
//         ]}
//         data={data}        
//         options={{
//           sorting: true
//         }}
//       />
//     )
//   }

import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';


export default function MaterialSorting() {

  const [page, setPage] = React.useState(1)
  const [limit, setLimit] = React.useState(5)
  const [total, setTotal] = React.useState()
  const [state, setState] = React.useState({
    columns: [
      { title: 'Type', field: 'type' },
      { title: 'Address', field: 'address' },
      { title: 'City', field: 'city'},
      { title: 'State', field: 'state'},
      { title: 'Country', field: 'country'},
      { title: 'Zip', field: 'zip'},
      
    ],
    data: [],
  });

  useEffect(() => {
    axios({
      method:"get",
      baseURL:"http://localhost:3000.user_info",
      url:`user_info?_page=${page}&_limit=${limit}`
  })
  .then((payload)=>payload.data)
  .then(data=>setState({ ...state, data },[]))

  axios({
    method:"get",
    baseURL:"http://localhost:3000/user_info",
    url:`total`,
})
.then(payload=>setTotal(payload.data[0]))
  }, []);
  
 

  return (
    
    <div className="m-5">
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      // data={state.data}
      data={query =>
        new Promise((resolve, reject) => {
          let url = `http://localhost:5000/products?_page=${query.page}&_limit=${query.pageSize}`
          axios(url)
            .then(result => {

              resolve({
                data: result.data,
                page: query.page+1,
                totalCount: total,
              })
            })
        })
      }
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
      options={{
        filtering: true,
        actionsColumnIndex: -1,
      }}
      body ={{
        emptyDataSourceMessage: 'No records to display'
    }}
    
    />
    </div>
  );
}


