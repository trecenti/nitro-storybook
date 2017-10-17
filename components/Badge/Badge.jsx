/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

type Props = {
  children?: Array<React.Node>,
  style: "primary" | "default" | "success" | "danger" | "warning" | "info" | "inverse",
  helperText?: Array<React.Node>,
  pill: boolean,
  className: string,
}

export default class Badge extends React.Component<Props> {
  static defaultProps = {
    children: <span>{`UR Special`}</span>,
    helperText: "",
    style: "default",
    pill: false,
    className: "",
  }
  props: Props
  render() {
    const {
      children,
      helperText,
      className,
      style,
    } = this.props
    const css = [
      className,
      styles.badge,
      styles[`badge-${style}`],
    ]
    return (
      <span
          className={classnames(css)}
      >
        {helperText}
        {children}
      </span>
    )
  }
}
