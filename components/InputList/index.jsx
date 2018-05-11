import React from "react"
import PropTypes from "prop-types"

const Input = ({ children }) => children
Input.propTypes = {
  children: PropTypes.element
}

const Add = ({ children }) => children
Add.propTypes = {
  children: PropTypes.element
}

export default class InputList extends React.PureComponent {
  static Add = Add
  static Input = Input
  static defaultProps = {
    value: [],
    className: "",
    onChange: () => {},
  }

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
  }

  state = {
    inputs: this.props.value
  }

  handleInputChange = (input, i) => {
    const inputValue = { ...this.state.inputs[i] }
    inputValue[input.name] = input.type === "checkbox" ? input.checked : input.value

    this.setState({
      inputs: [
        ...this.state.inputs.slice(0, i),
        inputValue,
        ...this.state.inputs.slice(i + 1)
      ]
    }, () => this.props.onChange(this.state.inputs))
  }

  handleAddClick = () => {
    this.setState({
      inputs: [
        ...this.state.inputs,
        { key: Math.random()},
      ]
    })
  }

  handleRemoveClick = (index) => {
    this.setState({
      inputs: this.state.inputs.filter((_, i) => i !== index)
    })
  }

  createInput = (wrapper, value, i) => {
    const input = React.Children.only(wrapper.props.children)
    return React.cloneElement(input, {
      key: value.id || value.key,
      value: value,
      onRemove: (e) => this.handleRemoveClick(i),
      onChange: (e) => {
        input.props.onChange && input.props.onChange(e)
        this.handleInputChange(e.target, i)
      }
    })
  }

  createAdd = (wrapper) => {
    const button = React.Children.only(wrapper.props.children)
    return React.cloneElement(button, {
      onClick: (e) => {
        button.props.onClick && button.props.onClick(e)
        this.handleAddClick(e)
      }
    })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === Input) {
        return this.state.inputs.map((value, i) => this.createInput(child, value, i))
      }

      if (child.type === Add) {
        return this.createAdd(child)
      }

      return child
    })

    return <div className={`input-list ${this.props.className}`}>{children}</div>
  }
}
