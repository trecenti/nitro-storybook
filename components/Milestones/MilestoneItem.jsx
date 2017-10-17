/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './milestones_item.scss'

type Props = {
  className: string,
  name: string,
  status: string,
  background: string,
}

export default class MilestoneItem extends React.Component<Props> {
  static defaultProps = {
    className: "",
    background: "light"
  }
  props: Props
  render() {
    const {
      className,
      name,
      status,
      background,
    } = this.props
    const css = [
      className,
      styles[`milestone-item`],
      styles[`background-${background}`],
      styles[`status-${status}`],
    ]
    return <li className={classnames(css)}><span>{name}</span></li>
  }
}
