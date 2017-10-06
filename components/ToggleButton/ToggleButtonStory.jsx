import React from "react"
import ToggleButton from "./ToggleButton"

import { text, select } from "@storybook/addon-knobs"

class StoryWrapper extends React.Component {
  render() {
    const { children } = this.props
    const child = React.cloneElement(children, {
      onToggle: (active) => {
        this.setState({active})
      },
      ...this.state
    })
    return (
      <div>
        {child}
      </div>
    )
  }
}

export default function ToggleButtonStory(stories) {
  stories.add("ToggleButton",
    () => {
      let props = {
        className: text("className", ""),
        offLabel: text("offLabel", "Deactivated"),
        onLabel: text("onLabel", "Activated"),
        size: select("size", ["small", "med", "large"]),
      }
      return (
        <StoryWrapper>
          <ToggleButton {...props}/>
        </StoryWrapper>
      )
    }
  )
}
