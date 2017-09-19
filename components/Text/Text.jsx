import React, { Component } from 'react'

import styles from './styles.scss'

export default class Text extends Component {
  render() {
    const {
      children,
    } = this.props

    return (
      <span className={styles.text}>
        {children}
      </span>
    )
  }
}