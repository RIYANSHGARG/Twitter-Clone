import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'

export const TwitterContext = createContext()

export const TwitterProvider= ({children}) => {

    const [appStatus, setAppStatus] = useState('loading')
    const [currentAccount, setCurrentAccount] = useState('')
    const router = useRouter()


    useEffect(() => {
        checkIfWalletIsConnected()
      }, [])



    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_accounts',
          })
          if (addressArray.length > 0) {
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
            // createUserAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (err) {
          router.push('/')
          setAppStatus('error')
        }
      }

      /**
   * Initiates MetaMask wallet connection
   */
  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        // createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }

  /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userAddress Wallet address of the currently logged in user
   */

  const createUserAccount = async(userAddress = currentAccount) =>{
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
//create userDoc
//upload

        _type: 'users',
        _id: userAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage:
          'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
        walletAddress: userAddress,
      }

      await client.createIfNotExists(userDoc)

      setAppStatus('connected')

    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

    return (
        <TwitterContext.Provider value = {{appStatus , currentAccount, connectToWallet}}> 
            {children}
        </TwitterContext.Provider>
    )
}