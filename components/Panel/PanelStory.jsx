import React from "react"
import Panel from "./Panel"
import Text from "../Text/Text"

import Wip from '../Wip/Wip'

import { text } from "@storybook/addon-knobs"

export default function PanelStory(stories) {
  stories.add("Panel",
    () => {
      let props = {
        title: text("title", "Hi, World."),
      }
      return (
        <Wip
            prNumber={3}
            branch="feature/se-settings-ui"
        >
          <Panel {...props}>
            <Text>{`It's gunna be yuge!`}</Text>
          </Panel>
        </Wip>
      )
    }
  )
}
