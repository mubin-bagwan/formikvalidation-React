import React from 'react';
import TextField from '@material-ui/core/TextField';
import Field from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {withFormik,useFormik} from "formik";
import * as Yup from 'yup';

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

  helperText:{
      color:"red"
  }

}));

    //  functional component

    const Form=(props) =>{
    
        const classes = useStyles();
        const formik=useFormik({
            initialValues:{
                firstName:'',
                lastName:'',
                Cname:'',
                email:'',
                pass:'',
                Cpass:''
            },

            onSubmit:values => {
                console.log(values);
            },
           
            validate: values => {
                // set the error message as 
                let errors={};

                if(!values.firstName){
                    errors.Fname="required";
                }

               
                if(!values.lastName){
                    errors.Lname="required";
                }

                if(!values.companyName){
                    errors.Cname="required";
                }

                if(!values.email){
                    errors.email="Email is not valid"
                }

                if(!values.password){
                    errors.pass="required";
                }

                if(!values.confirmPassword){
                    errors.Cpass="required";
                }

                return errors;
            }
        })


        return (
            <div className={classes.container}>
                <form className={classes.root} onSubmit={handleSubmit}>
                    <div>
                        <h1 className={classes.heading}>Register Here</h1>
                    </div>
                    <div>
                        <TextField
                                required
                                id="outlined-Name-input"
                                label="First Name"
                                type="text"
                                variant="outlined"
                                // helperText="required"
                                // value={values.firstName}
                                // helperText={touched.firstName ? errors.firstName : ""}
                                // error={touched.firstName && Boolean(errors.firstName)}
                                
                                onChange={formik.handleChange}
                                onBlur={handleBlur}
                                fullWidth
                            />

                            <TextField
                                required
                                id="outlined-Lname-input"
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                // helperText="required"
                                // value={values.lastName}
                                // helperText={touched.lastName ? errors.lastName : ""}
                                // error={touched.lastName && Boolean(errors.lastName)}
                                onChange={formik.handleChange}
                                onBlur={handleBlur}
                            />
                    </div>

                    <div>
                        <TextField
                            required
                            id="outlined-Cname-input"
                            label="Company Name"
                            type="text"
                            variant="outlined"
                            // helperText="required"
                            // value={values.companyName}
                            // helperText={touched.companyName ? errors.companyName : ""}
                            // error={touched.companyName && Boolean(errors.companyName)}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField
                            required
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            variant="outlined"
                            // helperText="required"
                            // value={values.email}
                            // helperText={touched.email ? errors.email : ""}
                            // error={touched.email && Boolean(errors.email)}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div>
                        <TextField
                            required
                            id="outlined-pass-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                            // helperText="required"
                            // value={values.password}
                            // helperText={touched.password ? errors.password : ""}
                            // error={touched.password && Boolean(errors.password)}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            // helperText="required"
                            // value={values.confirmPassword}
                            // helperText={touched.confirmPassword ? errors.confirmPassword : ""}
                            // error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            onChange={formik.handleChange}
                            onBlur={handleBlur}
                        />     
                        </div> 

                        <div className={classes.heading}>
                            <Button type="submit" variant="contained" color="secondary">Sign In</Button>
                        </div>                
                </form>       
            </div>
        );
    }

    
  /*  // validation with formik

    const ValidationForm=withFormik({
        mapPropsToValues:({
            firstName,
            lastName,
            companyName,
            email,
            password,
            confirmPassword
        }) =>{
            return{
                firstName:firstName || " ",
                lastName:lastName || " ",
                companyName:companyName || "",
                email:email || "",
                password:password ||"",
                confirmPassword:confirmPassword  || ""
            }
        },

        validationSchema:Yup.object().shape({
            firstName:Yup.string().required("required"),
            lastName:Yup.string().required("required"),
            companyName:Yup.string().required("required"),
            email:Yup.string()
                .email("Enter a Valid email").required("Email is required"),

                password:Yup.string()
                    .min(8,'Password must contain 8 character')
                    .required("Enter your password"),

                    confirmPassword:Yup.string()
                    .required("confirm your password")
                    .oneOf([Yup.ref("password")], "Password does not match !!!")
        }),



                    // send to the server

                    handleSubmit:(values,{setSubmitting})=>{
                        setTimeout(()=>{
                            alert(JSON.stringify(values,null,2))
                            setSubmitting(false);
                        },2000) (ValidationForm)
                    }

                    // handleSubmit:(values)=>{
                    //     console.log("button is clicked")
                    // }

    });  */
    // console.log(ValidationForm);


    export default (Form);


   

    