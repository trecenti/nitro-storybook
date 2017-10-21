/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

type Props = {
  children?: Array<React.Node>,
  className?: string,
  animate: boolean
}

export default class TVSidebar extends React.Component<Props> {
  static defaultProps = {
    classname: "",
    animate: false
  }
  props: Props

  render() {
    const {
      children,
      animate
    } = this.props
    const css = [
      styles[`tv-sidebar`],
      animate ? styles[`animate`] : ``
    ]
    return (
      <div className={classnames(css)}>
        {children}
      </div>
    )
  }
}
