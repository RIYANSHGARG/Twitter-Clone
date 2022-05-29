import React from 'react'
import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'
const style = {
  wrapper: 'border-[#38444d] border-b',
  header: 'py-1 px-3 mt-2 flex item-center',
  primary: 'bg-transparent outline-none font-gold',
  secondary: 'text-[#8899a6] text-xs',
  backButton:
    'text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1',
  coverPhotoContainer:
    'flex item-center justify-center h-[15vh] overflow-hidden ',
  coverPhoto: 'object-cover h-full w-full',
  profileImageContainer:
    'w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between',
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

function ProfileHeader() {
  const router = useRouter()

  const isProfileImageNft = false
  const currentAccount = '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c'

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton} o>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Riyansh Garg</div>
          <div className={style.secondary}>1 tweets</div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://i.imgur.com/xyjncym.jpg"
          alt="cover image"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? 'hex' : style.profileImageContainer}
        >
          <img
            src="https://i.imgur.com/foXaJLg.png"
            alt="Riyansh"
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Riyansh Garg</div>
        </div>

        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
        <div className={style.nav}>
          <div className={style.activeNav}>Tweets</div>
          <div>Tweets and Replies</div>
          <div>Media</div>
          <div>Links</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
