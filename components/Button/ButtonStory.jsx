import React from "react"
import Button from "./Button"
import _ from 'lodash'

import { text, select } from "@storybook/addon-knobs"

export default function ButtonStory(stories) {
  stories.add("Solid Buttons",
    () => {
      let props = {
        className: text("className", "btn-default"),
        
        type: select("type", ["anchor", "button", "submit", ""], "button")
      }
      return (
        <Button {...props}/>
      )
    }
  )

  stories.add("Ghost Buttons",
    () => {
      const props = {
        className: text("className", "btn-ghost-power-royal"),
        text: text("text", "Click Me, I'm Blue"),
        type: select("type", ["anchor", "button", "submit", ""], "button")
      }
      const props2 = {
        className: text("className", "btn-ghost-power-green"),
        text: text("text", "I'm Lucky"),
        type: select("type", ["anchor", "button", "submit", ""], "button")
      }
      return (
        <div className="container">
          <Button {...props}/>
          <Button {...props2}/>
        </div>

      )
    }
  )
}
