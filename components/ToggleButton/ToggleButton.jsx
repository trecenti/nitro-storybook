/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'

type Props = {
  active: boolean,
  className?: string,
  offLabel?: string,
  onLabel?: string,
  onToggle: () => mixed,
  size?: 'small' | 'med' | 'large',
}

import styles from './toggleButton.scss'

export default class ToggleButton extends Component<Props> {
  static defaultProps = {
    active: false,
    size: 'med',
  }

  props: Props

  handleToggle = () => {
    this.props.onToggle(!this.props.active)
  }

  render() {
    const {
      active,
      className,
      offLabel,
      onLabel,
      size,
    } = this.props

    const css = [
      styles[`toggle-button-${size}`],
      active ? styles[`toggle-button-${size}-active`] : null,
      "pull-left",
    ]

    return (
      <div className={className}>
        <div
            className={classnames(css)}
            onClick={this.handleToggle}
        />
        <If condition={offLabel && onLabel}>
          <label
              className="pl-4"
              onClick={this.handleToggle}
          >
            <If condition={active}>
              <strong>
                {onLabel}
              </strong>
            <Else/>
              {offLabel}
            </If>
          </label>
        </If>
      </div>

    )
  }
}