import React from "react"
import ToggleButton from "./ToggleButton"

import Wip from '../Wip/Wip'

import { boolean, text, select } from "@storybook/addon-knobs"

export default function ToggleButtonStory(stories) {
  stories.add("ToggleButton",
    () => {
      let props = {
        active: boolean("active", false),
        className: text("className", ""),
        offLabel: text("offLabel", "Deactivated"),
        onLabel: text("onLabel", "Activated"),
        size: select("size", ["small", "med", "large"]),
      }
      return (
        <Wip
            prNumber={3}
            branch="feature/se-settings-ui"
        >
          <ToggleButton {...props}/>
        </Wip>
      )
    }
  )
}
