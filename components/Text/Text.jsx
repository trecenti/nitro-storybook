/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'


type Props = {
  children?: Array<React.Node>,
  color: "sky-lighter" | "sky-light" | "sky" | "sky-dark" | "ink-lightest" | "ink-lighter" | "ink-light"| "ink" | "ink-dark",
  size: "base" | "large" | "larger" | "largest" | "small" | "smaller" | "smallest",
  bold: boolean,
  italic: boolean,
  textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
  className: string,
}

export default class Text extends React.Component<Props> {
  static defaultProps = {
    children: <span>She stared through the window at the stars.</span>,
    size: "base",
    color: "ink",
    bold: false,
    italic: false,
    textTransform: "none",
    className: "",
  }
  props: Props
  render() {
    const {
      children,
      className,
      bold,
      italic,
      textTransform,
      size,
      color,
    } = this.props
    const css = [
      className,
      styles.badge,
      styles[`text-${color}`],
      styles[`text-${size}`],
      styles[`text-${textTransform}`],
      bold ? styles["font-weight-bold"] : null,
      italic ? styles["font-italic"] : null,
    ]
    return (
      <span
          className={classnames(css)}
      >
        {children}
      </span>
    )
  }
}
