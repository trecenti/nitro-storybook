import React from "react"
import Badge from "./Badge"

import { text, select } from "@storybook/addon-knobs"

export default function BadgeStory(stories) {
  stories.add("Badge",
    () => {
      let props = {
        className: text("className", ""),
        style: select("style", ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], "primary")
      }
      return (
        <Badge {...props}>
          {`Hi`}
        </Badge>
      )
    }
  )
}