import React from "react"
import ToggleButton from "./ToggleButton"

import Wip from '../Wip/Wip'

import { text, select } from "@storybook/addon-knobs"

class Wrapper extends React.Component {
  state = {
    active: false,
  }
  handleOnChange = (active) => {
    this.setState({active})
  }
  render() {
    const {children} = this.props
    return (
      <Wip
          prNumber={3}
          branch="feature/se-settings-ui"
      >
        <div className="container my-5">
          <div className="col-sm-6">
            {
              React.cloneElement(children, {
                onToggle: this.handleOnChange,
                active: this.state.active,
              })
            }
          </div>
        </div>
      </Wip>
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
        <Wrapper>
          <ToggleButton {...props}/>
        </Wrapper>
      )
    }
  )
}
