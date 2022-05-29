import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widget'

const style = {
  wrapper: `flex justify-center  select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] `,
}

function profile() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
          {/* profile header */}
          {/* profile tweets */}
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default profile
