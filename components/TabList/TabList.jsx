/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'

import { TabType } from '../Tab/Tab'

type Props = {
  children: Array<TabType>,
}

import styles from './tabList.scss'

export default class TabList extends Component<Props> {
  props: Props

  render() {
    const {
      children,
    } = this.props

    const css = [
      styles[`tabList`],
    ]

    return (
      <div className={classnames(css)}>
        {children}
      </div>
    )
  }
}