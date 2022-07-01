/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AddPostForm } from './AddPostForm';


const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props { }

export const AddPostPopup = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddBoxIcon />}
        css={css`
          margin-bottom: 15px;
          border: 1px solid black;
          color: black;
      `}>
        Add new post
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add new post</DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
