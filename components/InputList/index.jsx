import React from "react"
import type { Item, State, InputListProps, WrapperProps } from "./types"

const Input = ({ children }: WrapperProps) => children
const Add = ({ children }: WrapperProps) => children

export default class InputList extends React.PureComponent<InputListProps, State> {
  static Add = Add
  static Input = Input
  static defaultProps = {
    className: "",
    onChange: () => {},
    value: [],
  }

  state = {
    inputs: this.props.value
  }

  handleInputChange = (input: HTMLInputElement, i: number) => {
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

  handleRemoveClick = (index: number) => {
    this.setState({
      inputs: this.state.inputs.filter((_, i) => i !== index)
    })
  }

  createInputElement = (wrapper: Add, value: Item, i: number) => {
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

  createAddElement = (wrapper: Input) => {
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
        return this.state.inputs.map((value, i) => this.createInputElement(child, value, i))
      }

      if (child.type === Add) {
        return this.createAddElement(child)
      }

      return child
    })

    return <div className={`input-list ${this.props.className}`}>{children}</div>
  }
}
