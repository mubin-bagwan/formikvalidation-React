import React from "react";
// import "./Form.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {useFormik} from "formik";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1.5),
        width: 200,
      },
    },
  
    container: {
      display: "Flex",
      justifyContent: "center",
      marginTop: "50px"
    },
  
    heading:{
      display: "Flex",
      justifyContent: "center",
    },
  
  }));
  


const Form=()=>{
        // for style
    const classes = useStyles();

  // use the formik to managing form state
        const formik=useFormik({
            initialValues:{
                fName:'',
                lName:'',
                cName:'',
                email:'',
                pass:'',
                cPass:''
            },

            onSubmit:values => {
                setTimeout(()=>{
                    alert(JSON.stringify(values,null,2))
                    // setSubmitting(false);
                },1000)
            },
           
            validate: values => {
                // set the error message as 
                let errors={};

                if(!values.fName){
                    errors.fName="required";
                }

               
                if(!values.lName){
                    errors.lName="required";
                }

                if(!values.cName){
                    errors.cName="required";
                }

                if (!values.email) {
                        errors.email = 'Required'
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email format'
                      }

                      const passwordRegex = "";
                      if (!values.pass) {
                          errors.pass = "*Required";
                      } else if (values.length < 8) {
                          errors.pass = "*Password must be 8 characters long.";
                      }      

                if(!values.cPass){
                    errors.cPass="required";
                }

                return errors;
            }
        })
    
       console.log(formik.values);

  return(
    <div className={classes.container}>
        {/* <h1 className="heading">Create an Account</h1> */}
      <form className={classes.root} onSubmit={formik.handleSubmit}>

      <div>
             <h1 className={classes.heading}>Register Here</h1>
    </div>
         <div>
          <TextField
           id="Fname"
           label="First Name"
           type="text"
           variant="outlined"
        //    helperText={formik.errors.Fname ? formik.errors.Fname : " " }
           helperText={formik.errors.fName && formik.touched.fName && formik.errors.fName}
           error={formik.errors.fName && formik.touched.fName && formik.errors.fName}
           onChange={formik.handleChange} 
           value={formik.values.fName}
           name="fName" />
            
         <TextField   
           id="lName"
           label="Last Name"
           type="text"
           variant="outlined"
           helperText={formik.errors.lName && formik.touched.lName && formik.errors.lName}
           error={formik.errors.lName && formik.touched.lName && formik.errors.lName} 
           onChange={formik.handleChange} 
           value={formik.values.lName}
            name="lName"/> 
          </div>
          
          <div>
          <TextField   
           id="cName"
           label="Company Name"
           type="text"
           variant="outlined"
           helperText={formik.errors.cName && formik.touched.cName && formik.errors.cName}
           error={formik.errors.cName && formik.touched.cName && formik.errors.cName} 
           onChange={formik.handleChange} 
           value={formik.values.cName}
           name="cName" />
                
        <TextField   
           id="email"
           label="Email"
           type="text"
           variant="outlined"
           helperText={formik.errors.email && formik.touched.email && formik.errors.email} 
           error={formik.errors.email && formik.touched.email && formik.errors.email}
           onChange={formik.handleChange} 
           value={formik.values.email}
           name="email" />
          </div>
         
          <div>
          <TextField   
           id="pass"
           label="Password"
           type="text"
           variant="outlined"
           helperText={formik.errors.pass && formik.touched.pass && formik.errors.pass} 
           error={formik.errors.pass && formik.touched.pass && formik.errors.pass}
           onChange={formik.handleChange} 
           value={formik.values.pass}
           name="pass" />
            
        <TextField   
           id="cPass"
           label="Confirm Password"
           type="text"
           variant="outlined"
           helperText={formik.errors.cPass && formik.touched.cPass && formik.errors.cPass}
           error={formik.errors.cPass && formik.touched.cPass && formik.errors.cPass} 
           onChange={formik.handleChange} 
           value={formik.values.cPass}
           name="cPass" />
          </div>
          <div className={classes.heading}>
                <Button type="submit" variant="contained" color="secondary">Sign In</Button>
            </div>    
    </form>
    </div>
  )
}

export default Form;




