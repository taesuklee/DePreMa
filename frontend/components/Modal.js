'use client'
import { useModalContext } from '@/context/ModalContext'
import { useWalletContext } from '@/context/WalletContext'
import { predictionABI } from '@/generated'
import { contractAddress } from '@/lib/constants'
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
import dayjs from 'dayjs'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { parseEther } from 'viem'
import { http, createConfig, simulateContract } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { config } from '@/config'
import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi'
import Link from 'next/link'

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
  const [loading, setLoading] = useState(false)
  const { data: hash, writeContract, isPending } = useWriteContract()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  const { open, setOpen, predictionOptions } = useModalContext()
  const { address } = useWalletContext()

  const handleClose = () => setOpen(!open)

  useEffect(() => {
    if (isPending || isLoading || isSuccess) {
      setLoading(true)
      return
    }

    setLoading(false)
  }, [isLoading, isPending, isSuccess])

  console.log('ASDHF', predictionOptions)

  const confirmTransaction = async (amount) => {
    writeContract({
      address: contractAddress,
      abi: predictionABI,
      functionName: 'predict',
      args: [predictionOptions.gameId, predictionOptions.betOn],
      value: parseEther(amount),
    })
  }

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        {address ? (
          loading ? (
            <div className="flex items-center justify-center">
              {!isSuccess && <Loader2 className="animate-spin" />}
              {!isPending && (
                <Link
                  legacyBehavior
                  href={`https://sepolia.etherscan.io/tx/${hash}`}
                  passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    {`${
                      isLoading ? 'Transferring.' : 'Completed.'
                    } Click here to see the transaction.`}
                  </a>
                </Link>
              )}
            </div>
          ) : (
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
                  <TextField
                    error={amount && amount > 0 ? false : true}
                    helperText={
                      amount && amount > 0
                        ? null
                        : 'The amount should be bigger than 0'
                    }
                    onChange={(e) => setAmount(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">ETH</InputAdornment>
                    }
                    value={amount}
                  />
                </FormControl>
                <Button
                  disabled={isPending}
                  className="border-blue-800 text-blue-800"
                  variant="outlined"
                  onClick={() => confirmTransaction(amount)}>
                  {isPending ? 'Confirming...' : 'Confirm'}
                </Button>
              </div>
            </>
          )
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
