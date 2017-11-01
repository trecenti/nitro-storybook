import React from "react"
import FlyoutPanel from "./FlyoutPanel"

import { withInfo } from '@storybook/addon-info'
import { select, text, boolean } from "@storybook/addon-knobs"

export default function AvatarStory(stories) {
  stories.add(
    "FlyoutPanel",
    withInfo("Panel that flies from the left or right side")(() => {
      let props = {
        position: select("position", ["left", "right"]),
        show: boolean("show", true),
      }
      return (
        <FlyoutPanel {...props}>
          <h1>Content</h1>
          <input />
        </FlyoutPanel>
      )
    })
  )
}
