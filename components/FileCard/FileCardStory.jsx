import React from "react"
import FileCard from "./FileCard"

import {  } from "@storybook/addon-knobs"

export default function FileCardStory(stories) {
  stories.add("File Card",
    () => {
      let props = {}
      return (
        <FileCard {...props}/>
      )
    }
  )
}
