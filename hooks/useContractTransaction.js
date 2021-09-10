import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function useContractTransaction({ message, redirectTo }) {
  // let tx
  const [txLoading, setTxLoading] = useState(false)
  const [txSuccess, setTxSuccess] = useState(0)

  const [promise, setPromise] = useState(null)
  const toast = useToast()

  const setTransaction = async message => {
    try {
      console.log("TRANSACTION STARTED")
      setTxLoading(prev => true)

      const tx = await promise
      await tx.wait()
      setTxLoading(prev => false)
      setTxSuccess(prev => prev + 1)
      // const tx = {}
      // tx.hash = "blabla"

      toast({
        title: "Confirmed transaction",
        description: `${message}. \nTransaction hash: ${tx.hash}`,
        status: "success",
        duration: 9000,
        isClosable: true
      })
    } catch (e) {
      setTxLoading(prev => false)
      console.log(e.message)

      if (e.code === 4001) {
        console.log("ERROR 4001", e.message)
        toast({
          title: "Transaction signature denied",
          description: "You denied transaction signature.",
          status: "error",
          duration: 9000,
          isClosable: true
        })
      }
    }
  }

  // useEffect(() => {
  //   console.log(">>>> audomatic print:", txLoading)
  // }, [txLoading])

  useEffect(() => {
    if (promise) {
      // setTxLoading(true)
      setTransaction(promise, message)
    } else {
      setTxLoading(false)
    }
  }, [promise])

  return [txLoading, setPromise, txSuccess]
}
