import React from "react"
import Button from "./Button"

import { text, select } from "@storybook/addon-knobs"

export default function ButtonStory(stories) {
  stories.add("Buttons",
    () => {
      let props = {
        className: text("className", ""),
        text: text("text", "BUTT"),
        type: select("type", ["anchor", "button", "submit"], "button")
      }
      return (
        <Button {...props}/>
      )
    }
  )
}
