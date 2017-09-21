/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

type Props = {
  type: "anchor" | "button" | "submit",
  text: string,
  className: string,
}

export default class Button extends React.Component<Props> {
  static defaultProps = {
    text: "button",
  }
  props: Props
  createElementTag = () => {
    const {className, text, type} = this.props;
    let tag
    let props = {}
    switch(type) {
      case "anchor":
        tag = "a"
      break
      case "button":
        tag = "input"
        props.type = "button"
        props.value = text
      break
      case "submit":
        tag = "input"
        props.type = "submit"
        props.value = text
      break
      default:
        tag = "span"
      break
    }
    const css = [
      "btn",
      className,
      styles.btn,
    ]
    props.className = classnames(css)

    const element = React.createElement(tag, props)

    if(tag === "input") {
      return <element.type {...element.props} />
    } else {
      return (
        <element.type {...element.props}>
          {text}
        </element.type>
      )
    }
  }
  render() {
    return this.createElementTag()
  }
}
