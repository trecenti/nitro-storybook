/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './tv-background.scss'

type Props = {
  children?: Array<React.Node>,
  className?: string,
  color: string,
  pattern: string,
  gradient: boolean,
  animate: boolean
}

export default class TVBackground extends React.Component<Props> {
  static defaultProps = {
    animate: false,
    color: "navy",
    pattern: "dot",
    gradient: true
  }
  props: Props

  render() {
    const {
      className,
      color,
      pattern,
      gradient,
      animate,
      children
    } = this.props
    const css = [
      className,
      styles[`tv-background`],
      styles[`bg-power-${color}`],
      styles[`pattern-${pattern}`],
      gradient ? styles[`bg-${gradient}`] : ``,
      animate ? styles[`animate`] : ``
    ]
    const childCSS = [
      styles[`children`]
    ]
    return (
      <div className={classnames(css)}>
        <div className={classnames(childCSS)}>
          {children}
        </div>
      </div>
    )
  }
}
