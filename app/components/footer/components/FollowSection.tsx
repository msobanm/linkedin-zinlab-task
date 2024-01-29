import React from "react"
import youtubeIcon from "../../../../public/youtube.svg"
import twitterIcon from "../../../../public/twitter.svg"
import facebookIcon from "../../../../public/facebook.svg"
import SocialMediaIcon from "../../SocialMediaIcon"

const FollowSection = () => {
  return (
    <div className="w-full flex gap-8 items-center py-4 border-b-2 border-gray-200">
      <h2 className="font-semibold">Follow Us</h2>
      <div className="flex gap-8">
        <SocialMediaIcon icon={youtubeIcon} />
        <SocialMediaIcon icon={twitterIcon} />
        <SocialMediaIcon icon={facebookIcon} />
      </div>
    </div>
  )
}

export default FollowSection
