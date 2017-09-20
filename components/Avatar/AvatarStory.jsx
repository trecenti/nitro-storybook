import React from "react"
import Avatar from "./Avatar"

import { select, text, boolean } from "@storybook/addon-knobs"

export default function AvatarStory(stories) {
  stories.add("Avatar",
    () => {
      let props = {}
      props.url = text("url", "https://i.giphy.com/l46CjoMYO5n2hQnWE.gif")
      props.thumb = props.url
      props.size = select("size", ["smaller", "small", "base", "large", "larger"], "base")
      props.showPopover = boolean("showPopover", true)
      return (<Avatar {...props}/>)
    },
  )
}