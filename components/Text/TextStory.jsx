import React from "react"
import Text from "./Text"

import { text, select, boolean } from "@storybook/addon-knobs"

export default function TextStory(stories) {
  stories.add("Text",
    () => {
      let props = {
        className: text("className", ""),
        color: select("Color", ["sky-lighter", "sky-light", "sky", "sky-dark", "ink-lightest", "ink-lighter", "ink-light", "ink", "ink-dark"], "ink"),
        size: select("Size", ["base", "large", "larger", "largest", "small", "smaller", "smallest"], "base"),
        bold: boolean("Bold", false),
        textTransform: select("Text Transform", ["none", "uppercase", "lowercase", "capitalize"], "none"),
        italic: boolean("Italic", false),
      }
      return (
        <Text {...props}>
          {`She stared through the window at the stars.`}
        </Text>
      )
    }
  )
}
