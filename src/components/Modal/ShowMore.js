import React from "react";

import {
  DialogTitle,
  DialogContentText,
  Dialog,
  DialogContent,
} from "@mui/material";

import styles from "./style.module.css";

const ShowMore = ({ job, openModal, setOpenModal }) => {
  const handleClose = () => setOpenModal(false);
  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle className={styles.textCenter}>Job Description</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <strong>About Company:</strong>
        </DialogContentText>
        <p>{job?.jobDetailsFromCompany}</p>
      </DialogContent>
    </Dialog>
  );
};

export default ShowMore;
