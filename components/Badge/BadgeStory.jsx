import React from "react"
import Badge from "./Badge"

import { text, select } from "@storybook/addon-knobs"

export default function BadgeStory(stories) {
  stories.add("Badge",
    () => {
      let props = {
        className: text("className", ""),
        style: select("style", ["primary", "default", "success", "danger", "warning", "info", "inverse"], "primary")
      }
      return (
        <div className="container my-5">
          <Badge {...props}>
            {`I'm A Badge`}
          </Badge>
        </div>
      )
    }
  )
}
