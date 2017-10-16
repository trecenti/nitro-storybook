/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = {
  name: string,
  status: string,
}

export default class MilestoneItem extends React.Component<Props> {
  static defaultProps = {}
  props: Props
  render() {
    const {
      name,
      status,
    } = this.props
    return <li className={styles[`status-${status}`]}><span>{name}</span></li>
  }
}
