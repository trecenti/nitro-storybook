/* @flow */

import React from 'react'
import classnames from 'classnames'
import Text from '../Text/Text'


import styles from './styles.scss'

type Props = {
  children?: Array<React.Node>,
  style: "primary" | "default" | "success" | "danger" | "warning" | "info" | "inverse",
  helperText: string,
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
      pill,
      style,
    } = this.props
    const css = [
      className,
      styles.badge,
      styles[`badge-${style}`],
      pill ? styles.pill : null,
    ]
    const textColor = style == "default" ? "ink-lighter" : "white"
    return (
      <span
          className={classnames(css)}
      >
      <Text textTransform="uppercase" bold="false" size="smallest" color={textColor} className={styles["text-helper"]}>
        {helperText}
      </Text>
        {children}
      </span>
    )
  }
}
