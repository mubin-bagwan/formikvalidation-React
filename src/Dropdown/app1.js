import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Status1 from "./app2";

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
  

const Status=()=>{
    const [open, setOpen] = React.useState(false);

  const handleClickOpenPopup = () => {
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
  };

  return(
<div>
    <div>   
    <Button variant="outlined" color="primary" onClick={handleClickOpenPopup} style={{marginTop:"10px",marginLeft:"20px"}}>
        Save changes
    </Button>
        <Dialog onClose={handleClosePopup} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
        Warning
        </DialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
            The Status for this contact has been changed to a status other than active or passed due.
            Do you want all group information for this contact to be expired.
        </Typography>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClosePopup} color="primary" color="primary">
           <Status1 />
        </Button>
        <Button  onClick={handleClosePopup} color="primary">
        Close
        </Button>
        </DialogActions>
    </Dialog>
</div>  
</div>

  )
}

export default Status;
