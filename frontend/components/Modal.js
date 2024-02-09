'use client'
import { useModalContext } from '@/context/ModalContext'
import { useWalletContext } from '@/context/WalletContext'
import {
  Box,
  Typography,
  Modal as MuiModal,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@mui/material'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'grey',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const Modal = ({ text }) => {
  const [amount, setAmount] = useState(0)
  const { open, setOpen } = useModalContext()
  const { address } = useWalletContext()

  const handleClose = () => setOpen(!open)

  const confirmTransaction = (amount) => {
    console.log('amount', amount)
  }

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        {address ? (
          <>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="text-black">
              How much do you want to stake?
            </Typography>
            <div className="flex items-center justify-between">
              <FormControl sx={{ m: 1 }} variant="outlined">
                <OutlinedInput
                  onChange={(e) => setAmount(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">ETH</InputAdornment>
                  }
                  value={amount}
                />
              </FormControl>
              <Button
                className="border-blue-800 text-blue-800"
                variant="outlined"
                onClick={() => confirmTransaction(amount)}>
                Confirm
              </Button>
            </div>
          </>
        ) : (
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-black">
            Connect your wallet first.
          </Typography>
        )}
      </Box>
    </MuiModal>
  )
}
