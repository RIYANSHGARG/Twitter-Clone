import React from 'react'
import TweetBox from '../home/TweetBox'
import Post from '../Post'

import {BsStars} from 'react-icons/bs'

const style = {
    wrapper:`flex-[2] border-r border-l border-[#38444d]`,
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

function Feed(){
    return (
      <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <div>
            <TweetBox />
            {tweets.map((tweet,index) =>(
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
      </div>
    )
}

export default Feed