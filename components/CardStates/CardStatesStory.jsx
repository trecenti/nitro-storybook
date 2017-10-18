
import React from "react"
import CardStates from "./CardStates"

import { text, select, boolean } from "@storybook/addon-knobs"

export default function FooStory(stories) {
  stories.add("Card States",
    () => {
      let props = {
        style: select("style", ["default", "danger", "primary", "success", "warning", "inverse"])



      }
      return (
        <CardStates {...props}/>
      )
    }
  )
}
