import { Box, Typography, Modal as MuiModal } from '@mui/material'

export const Modal = ({ text, open }) => {
  console.log('🚀 ~ Modal ~ open:', open)
  const handleClose = () => {}

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </MuiModal>
  )
}
