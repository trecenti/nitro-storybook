/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

type Props = {
  type: "anchor" | "button" | "submit",
  children?: Array<React.Node>,
  className: string,
}

export default class Button extends React.Component<Props> {
  static defaultProps = {
    children: <span>{`Herp Derp`}</span>
  }
  props: Props
  createElementTag = () => {
    const {type} = this.props;
    let tag
    let props = {}
    switch(type) {
      case "anchor":
        tag = "a"
      break
      case "button":
        tag = "button"
      break
      case "submit":
        tag = "input"
        props.type = "submit"
      break
      default:
        tag = "span"
      break
    }
    return React.createElement(tag, props)
  }
  render() {
    const {
      children,
      className,
    } = this.props

    const ElementTag = this.createElementTag()

    const css = [
      "btn",
      className,
      styles.btn,
    ]

    return (
      <ElementTag.type
          {...ElementTag.props}
          className={classnames(css)}
      >
        {children}
      </ElementTag.type>
    )
  }
}
