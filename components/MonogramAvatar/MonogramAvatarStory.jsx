import React from "react"
import MonogramAvatar from "./MonogramAvatar"
import { withInfo } from '@storybook/addon-info'

import { text } from "@storybook/addon-knobs"

export default function MonogramAvatarStory(stories) {
  stories.add("MonogramAvatar",
    withInfo("An avatar that will display user initials when an image is not available")(
      () => {
        const props = {
          personName: text("personName", "Jason Cypret"),
          url: text("url", "https://s3-hq.powerhrg.com/nitro-production/avatars/32825/badge/new-face.jpg?AWSAccessKeyId=IWSW00NEQHMEYQTLZ7E9&Signature=ut0dmlR/qzvaSRoW%2BS8NU8jNh2Q%3D&Expires=3018764254"),
        }
        return <MonogramAvatar {...props}/>
      }
    )
  )
}
