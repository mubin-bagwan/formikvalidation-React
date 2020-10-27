import {useState} from "react";
import React, { useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useForm} from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { CardContent } from "@material-ui/core";
import 'date-fns';
import GreenRadio from '@material-ui/core/Radio';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  
    container: {
      display: "Flex",
      justifyContent: "center",
      marginTop: "10px",
      marginLeft:"auto",
      marginRight:"auto",
    //   height: "'auto'",
      width:"500px",
      border:"1px solid black",
      background: "#ffefba", /* fallback for old browsers */
      background: "-webkit-linear-gradient(to right, #ffefba, #ffffff)",  /* Chrome 10-25, Safari 5.1-6 */
      background: "linear-gradient(to right, #ffefba, #ffffff)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      borderRadius:"20px"
    },
  
    heading:{
      display: "Flex",
      justifyContent: "center",
      fontFamily:"Italic"
    },

    buttons:{
        display: "Flex",
        justifyContent: "center",
        marginTop:"10px"
    },
    buttons1:{
        display: "Flex",
        justifyContent: "center",
        marginTop:"20px"
    },

  }));

        // password field validation
    const required = "This field is required";
    const maxLength = "Your input exceed maximum length";

    // // Error Component
    //     const errorMessage = error => {
    //         return <div className="invalid-feedback">{error}</div>;
    //     };

  const Hooksvalidation=()=>{
    const classes = useStyles();

    //  set the form validation 
    const {handleSubmit,register,errors,getValues}=useForm(
        {
            mode:"onChange"
        }
    )


    //for Radio button
    
    const [selectedValue, setSelectedValue] = React.useState('Male');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };


    // for date picker
    const [selectedDate,setSelectedDate]=React.useState(new Date('2020-10-22T21:11:54'));

    const handleDateChange=(date)=>{
        setSelectedDate(date);
    }

    
    const onSubmit=data=>{
        console.log(data)
        // alert(JSON.stringify(data))
    }

    const pass=useRef({});
    pass.current=getValues("pass", "");

    return(
        <div className={classes.container}>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <card>
                <h1 className={classes.heading}>Create New Account</h1>
            <CardContent>
                    <div>   
                        <TextField               
                                label="First Name"
                                type="text"
                                variant="outlined"
                                name="fName"
                                autoFocus={true}
                                helperText= {errors.fName ? errors.fName.message :""}
                                error={errors.fName ? true:false}
                                inputRef={register ({ required: "required", maxLength: 10 })}
                               
                            />

                        {/* {errors.fName && <div>This field is required</div>} */}

                        <TextField                             
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                name="lName"
                                helperText= {errors.lName ? errors.lName.message :""}
                                error={errors.lName ? errors.lName.message :""}
                                inputRef={register ({ required: "required", maxLength: 10 })}
                            />
                    </div>

                    <div>
                        <TextField                      
                            label="Company Name"
                            type="text"
                            variant="outlined"
                            name="cName"
                            helperText= {errors.cName ? errors.cName.message :""}
                            error={errors.cName ? errors.cName.message :""}
                            inputRef={register ({ required: "required", maxLength: 10 })}
                        />
                        <TextField
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            name="email"
                            helperText= {errors.email ? errors.email.message :""}
                            error={errors.email ? errors.email.message :""}
                            inputRef={register({ required: "required", 
                            pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        />
                    </div>

                    <div>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            name="pass"
                            helperText= {errors.pass ? errors.pass.message :""}
                            error={errors.pass ? errors.pass.message :""}
                            inputRef={register({
                                required: "required",
                                minLength: {
                                  value: 8,
                                  message: "Password must have at least 8 characters"
                                }
                              })}
                        />

                        <TextField
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            name="cPass"
                            helperText= {errors.cPass ? errors.cPass.message :""}
                            error={errors.cPass ? errors.cPass.message :""}
                            inputRef={register ({ required: "required",
                            validate:value=>
                            value === pass.current || "password does not match"
                            })}
                        />     
                        </div> 

                        <div>
                        <FormControl className={classes.buttons}>
                            <InputLabel htmlFor="gender-native-simple">State</InputLabel>
                                <Select
                                native
                                name="state"
                                helperText= {errors.state ? errors.state.message :""}
                                error={errors.state ? errors.state.message :""}
                                inputRef={register({required:"required"})}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value= "Karnataka">Karnataka</option>
                                    <option value= "Kerla">Kerla</option>
                                    </Select>
                        </FormControl>
                        </div >

                            {/* Validation for Radio button */}

                        <div className={classes.buttons1}>
                            <label>Male</label>
                        <GreenRadio
                            checked={selectedValue === 'Male'}
                            onChange={handleChange}
                            id="Male"
                            value="Male"
                            name="gender"
                            inputProps={{ 'aria-label': 'Male' }}
                            helperText={errors.gender ? errors.gender.message : ""}
                            error={errors.gender ? errors.gender.message: ""}
                            inputRef={register({required:true})}
                            />


                        <label>Female</label>
                        <GreenRadio
                                checked={selectedValue === 'Female'}
                                onChange={handleChange}
                                id="Female"
                                value="Female"
                                name="gender"
                                inputProps={{ 'aria-label': 'Female' }}
                                // helperText={errors.gender ? errors.gender.message : ""}
                                error={errors.gender ?true:false}
                                inputRef={register({required:true})}
                            />
                            {errors.gender ?  <label>errors.gender.message</label> : ""}
                        </div>

                        {/* Date picker */}
                        <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                name="date"
                                helperText={errors.date ? errors.date.message : ""}
                                error={errors.date ? errors.date.message : ""}
                                inputRef={register({required:"required"})}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                    </MuiPickersUtilsProvider>
                </div>

                            <hr></hr>
                        <div className={classes.buttons}>
                            <Button type="submit" variant="contained" color="secondary">Submit</Button>
                        </div> 
                </CardContent>
                </card>     
            </form>
        </div>
    )
  }

  export default Hooksvalidation;