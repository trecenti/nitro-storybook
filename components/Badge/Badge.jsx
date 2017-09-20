/* @flow */

import React from 'react'

type Props = {
  children?: Array<React.Node>,
  style: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark",
  className: string,
}

export default class Badge extends React.Component<Props> {
  static defaultProps = {
    children: <span>{`UR Special`}</span>,
    style: "default",
    className: "",
  }
  props: Props
  render() {
    const {
      children,
      className,
      style,
    } = this.props
    return (
      <span
          className={`badge badge-${style} ${className}`}
      >
        {children}
      </span>
    )
  }
}
