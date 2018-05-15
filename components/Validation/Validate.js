import React from "react"
import PropTypes from "prop-types"
import { validationCssMapping } from "./helpers"

export default class Validate extends React.PureComponent {
  static contextTypes = {
    onInputValid: PropTypes.func,
    onInputInvalid: PropTypes.func,
    registerWithGroup: PropTypes.func,
    registerWithForm: PropTypes.func,
  }

  static defaultProps = {
    propagate: false,
    trigger: "onChange",
  }

  state = {
    // 'undefined' represents a prestine validation state,
    // where no validation has taken place yet
    valid: undefined
  }

  componentWillMount() {
    this.context.registerWithGroup && this.context.registerWithGroup()
  }

  render() {
    const { children, trigger, propagate } = this.props
    const child = React.Children.only(children)

    return React.cloneElement(child, {
      className: `validation-${validationCssMapping[this.state.valid]}`,
      valid: propagate ? this.state.valid : undefined,
      onInvalid: e => {
        const input = e.target

        child.props.onInvalid && child.props.onInvalid(e)
        this.setState({ valid: false }, () => this.context.onInputInvalid(input))
      },
      [trigger]: e => {
        const input = e.target

        if (typeof child.props[trigger] === "function") {
          child.props[trigger](e)
        }

        if (input.checkValidity()) {
          this.setState({ valid: true }, () => this.context.onInputValid(input))
        } else {
          this.setState({ valid: false }, () => this.context.onInputInvalid(input))
        }
      }
    })
  }
}
