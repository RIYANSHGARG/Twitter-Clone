import React from 'react'
import Post from '../Post'

const style = {
    wrapper:`no-scrollbar`,
    header :`sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle : `text-xl font-bold`,
}

const tweets = [{
    displayName : 'Riyansh',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar:'https://i.imgur.com/LlyiSz3.png',
    text:'gm',
    isProfileImageNft: false,
    timestamp:'2022-03-19T12:00:00.000Z'
},
{
    displayName : 'Riyansh',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar:'https://i.imgur.com/LlyiSz3.png',
    text:'gm',
    isProfileImageNft: false,
    timestamp:'2022-03-19T12:00:00.000Z'
},
{
    displayName : 'Riyansh',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar:'https://i.imgur.com/LlyiSz3.png',
    text:'gm',
    isProfileImageNft: false,
    timestamp:'2022-03-19T12:00:00.000Z'
}]


function ProfileTweets() {
  return (
    <div>{tweets?.map((tweet,index) => (
        <Post 
            key={index}
            displayName="Riyansh Garg"
            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
            text={tweet.text}
            avatar={tweet.avatar}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
        />
    ))}</div>
  )
}

export default ProfileTweets