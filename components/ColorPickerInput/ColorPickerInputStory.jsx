import React from "react"
import Wip from '../Wip/Wip'
import ColorPickerInput from './ColorPickerInput'

class Wrapper extends React.Component {
  state = {
    color: '#000'
  }

  handleOnChange = (color) => {
    this.setState({color})
  }

  render() {
    const {
      color,
    } = this.state

    const child = React.cloneElement(this.props.children, {
      color,
      onChange: this.handleOnChange,
    })

    return child
  }
}

export default function ColorPickerStory(stories) {
  stories.add("ColorPickerInput",
    () => {
      return (
        <Wip
            branch="feature/se-settings-ui"
            prNumber={3}
        >
          <Wrapper>
            <ColorPickerInput/>
          </Wrapper>
        </Wip>
      )
    }
  )
}
