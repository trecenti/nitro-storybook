import React from "react"
import Milestones from "./Milestones"

import { text, select, object } from "@storybook/addon-knobs"

export default function MilestonesStory(stories) {
  stories.add("Milestones",
    () => {
      const example = [
        {
          name: 'First',
          status: 'done'
        },
        {
          name: 'Second',
          status: 'started'
        },
        {
          name: 'Third',
          status: null
        }
      ]
      let props = {
        className: text("className", ""),
        background: select("background", ["dark", "light"], "dark"),
        steps: object('steps', example)
      }
      return <Milestones {...props}/>
    }
  )
}
