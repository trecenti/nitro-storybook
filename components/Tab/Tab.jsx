/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'

import Icon from '../Icon/Icon'

export type TabType = {
  active: boolean,
  href?: string,
  icon?: string, //fa- icon
  onClick?: () => mixed,
  text: string,
}

import styles from './tab.scss'

export default class Tab extends Component<TabType> {
  props: TabType

  renderIcon() {
    const { icon } = this.props
    if (icon) return (<Icon name={icon} />)
    return null
  }

  render() {
    const {
      active,
      href,
      onClick,
      text,
    } = this.props

    const css = [
      "tab",
      styles.tab,
      active ? styles[`tab-active`] : null
    ]

    return (
      <Choose>
        <When condition={href}>
          <a
              className={classnames(css)}
              href={href}
          >
            { this.renderIcon() }
            {text}
          </a>
        </When>
        <When condition={!href}>
          <div
              className={classnames(css)}
              onClick={onClick}
          >
            { this.renderIcon() }
            {text}
          </div>
        </When>
      </Choose>
    )
  }
}