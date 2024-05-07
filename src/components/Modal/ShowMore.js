import React from 'react'
import { DialogTitle,DialogContentText,Dialog ,DialogContent} from '@mui/material';

const ShowMore = ({job, openModal,setOpenModal }) => {
    const handleClose= ()=>setOpenModal(false);
  return (
    <Dialog open={openModal} onClose={handleClose}  sx={{
        '& .MuiPaper-root': { 
            borderRadius: 3
        }
    }}>
    <DialogTitle sx={{textAlign:'center'}}>Job Description</DialogTitle>
    <DialogContent>
      <DialogContentText>
        <strong>About Company:</strong> 
      </DialogContentText>
      {job?.jobDetailsFromCompany}
    </DialogContent>
  </Dialog>
  )
}

export default ShowMore
