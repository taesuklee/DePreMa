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
import { useState } from 'react'
import { parseEther } from 'viem'
import { http, createConfig, simulateContract } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { config } from '@/config'
import { useReadContract, useWriteContract } from 'wagmi'

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
  const { data: hash, writeContract } = useWriteContract()
  const { data: balance } = useReadContract({
    abi: predictionABI,
    address: contractAddress,
  })

  const { open, setOpen } = useModalContext()
  const { address } = useWalletContext()

  const handleClose = () => setOpen(!open)

  const confirmTransaction = async (amount) => {
    setLoading(true)
    try {
      // const gameId = await readContract({
      //   address: contractAddress,
      //   abi: predictionABI,
      //   functionName: 'getGameId',
      //   args: [BigInt(prediction.game.sportId), BigInt(prediction.game.id)],
      // })

      // const game = await readContract({
      //   address: contractAddress,
      //   abi: predictionABI,
      //   functionName: 'getGame',
      //   args: [gameId],
      // })

      // if (game.externalId === BigInt(0)) {

      // const conf = await simulateContract(config, {
      //   address: contractAddress,
      //   abi: predictionABI,
      //   functionName: 'registerAndPredict',
      //   args: [
      //     BigInt(1),
      //     BigInt(1),
      //     BigInt(1707683621),
      //     'home',
      //     // BigInt(prediction.game.sportId),
      //     // BigInt(prediction.game.id),
      //     // BigInt(prediction.game.timestamp),
      //     // winnerToResult[prediction.predictedWinner],
      //   ],
      //   value: parseEther(`${amount ?? 0}`),
      // })

      const tx = await writeContract({
        address: contractAddress,
        abi: predictionABI,
        functionName: 'registerAndPredict',
        args: [
          BigInt(1),
          BigInt(1),
          BigInt(1707683621),
          'home',
          // BigInt(prediction.game.sportId),
          // BigInt(prediction.game.id),
          // BigInt(prediction.game.timestamp),
          // winnerToResult[prediction.predictedWinner],
        ],
        value: parseEther(`${amount ?? 0}`),
      })

      console.log('🚀 ~ confirmTransaction ~ tx:', tx, hash)
      // } else {
      //   const config = await prepareWriteContract({
      //     address: contractAddress,
      //     abi: predictionABI,
      //     functionName: 'predict',
      //     args: [gameId, winnerToResult[prediction.predictedWinner]],
      //     value: parseEther(`${prediction.wager ?? 0}`),
      //   })
      //   tx = await writeContract(config)
      // }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
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
              <Loader2 className="animate-spin" />
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
                  className="border-blue-800 text-blue-800"
                  variant="outlined"
                  onClick={() => confirmTransaction(amount)}>
                  Confirm
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
