import React from 'react'
import TweetBox from '../home/TweetBox'
import Post from '../Post'

import { BsStars } from 'react-icons/bs'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Riyansh garg',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar: 'https://i.imgur.com/79okfjG.png',
    text: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    isProfileImageNft: true,
    timestamp: '2022-05-15T12:00:00.000Z',
  },
  {
    displayName: 'Sheshans Kumar',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar: 'https://i.imgur.com/LlyiSz3.png',
    text: 'Leadership is the capacity to translate vision into reality.',
    isProfileImageNft: false,
    timestamp: '2022-05-10T12:00:00.000Z',
  },
  {
    displayName: 'Shiwani Singhal',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar: 'https://i.imgur.com/zTimfPh.jpg',
    text: 'We cannot all succeed when half of us are held back.',
    isProfileImageNft: false,
    timestamp: '2022-04-25T12:00:00.000Z',
  },
  {
    displayName: 'Karan Sarawagi',
    userName: '0x365d7d9DC23B23A8c45b647B88B139590BEaB99c',
    avatar: 'https://i.imgur.com/79okfjG.png',
    text: 'The way to become rich is to make money, not to save it.',
    isProfileImageNft: false,
    timestamp: '2022-03-19T12:00:00.000Z',
  },
]

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <div>
        <TweetBox />
        {tweets.map((tweet, index) => (
          <Post
            key={index}
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
              -4
            )}`}
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
