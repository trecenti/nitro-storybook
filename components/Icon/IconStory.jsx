import React from "react"
import Icon from "./Icon"

import { select, text, boolean } from "@storybook/addon-knobs"

export default function IconStory(stories) {
  stories.add("Icon",
    () => {
      let props = {
        name: select("name", ["battery-1", "battery-half", "battery-4"], "battery-half"),
        label: text("label", "Battery Percentage"),
        size: text("size", "lg"),
        spin: boolean("spin", false),
        onClick: () => {
          alert("Whaa? Why u click me?!")
        },
        title: text("title", "Battery Percentage")
      }
      // props.url = text("url", "https://i.giphy.com/l46CjoMYO5n2hQnWE.gif")
      // props.thumb = props.url
      // props.size = select("size", ["smaller", "small", "base", "large", "larger"], "base")
      // props.showPopover = boolean("showPopover", true)
      return (<Icon {...props}/>)
    }
  )
}