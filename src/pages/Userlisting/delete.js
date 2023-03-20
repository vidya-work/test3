import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

function Delete({handleClickDelete, open, deleterow}) {

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClickDelete}
      >
        <DialogTitle id="delete">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete">
            Are you sure you want to delete this row
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() =>  handleClickDelete()}>No</Button>
          <Button onClick={() => {handleClickDelete({index:deleterow})}}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Delete;