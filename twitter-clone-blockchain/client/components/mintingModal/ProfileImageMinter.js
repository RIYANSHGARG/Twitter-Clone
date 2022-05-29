import { useRouter } from 'next/router'
import React from 'react'
import { useState, useContext } from 'react'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'

const ProfileImageMinter = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState()

  const mint = async () => {}

  const modalChildren = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <InitialState
            profileImage={!profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )

      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState />

      default:
        router.push('/')
        setStatus('error')
        break
    }
  }

  return <div>{modalChildren(status)}</div>
}

export default ProfileImageMinter
