import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Status from "./app1";

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  


const Dropdown=()=>{

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


return(
    <div>   

        <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
            <lable style={{marginRight: "20px"}}>Catagory:</lable>
            <FormControl >
                {/* <InputLabel htmlFor="gender-native-simple">Catagory</InputLabel> */}
                    <Select
                    native
                    name="state"
                    >
                        <option aria-label="None" value="" />
                        <option value="">Regular Member</option>
                        <option value="">Public Member</option>
                        <option value= "">Student Member</option>
                        <option value= "">Test</option>
                        </Select>
            </FormControl>
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:"10px",marginLeft:"20px"}}>
                Commit
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Warning
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    Contact Catagory Has Changed. Do you wish to continue ?
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClickOpen} color="primary" color="primary">
                 <Status/>
                </Button>
                <Button  onClick={handleClose} color="primary">
                Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>  
    </div>

<div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
    <lable style={{marginRight: "20px"}}>Status :</lable>
        <FormControl >
            {/* <InputLabel htmlFor="gender-native-simple">State</InputLabel> */}
                <Select
                native
                name="state"
                >
                    <option aria-label="None" value="" />
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                    <option value= "">Not Available</option>
                    <option value= "">Busy</option>
                    </Select>
        </FormControl>
    <div>
            <Button variant="outlined" color="primary"  style={{marginTop:"10px",marginLeft:"30px"}}>
                Commit
            </Button>
         </div>  
    </div>
</div>
    )
}

export default Dropdown;
