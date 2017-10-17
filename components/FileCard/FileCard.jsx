/* @flow */

import React from 'react'

import styles from './styles.scss'

type Props = {}

export default class FileCard extends React.Component<Props> {
  static defaultProps = {}
  props: Props
  render() {
    return <span className={styles[`file-card`]}>{`I'm a File Card`}</span>
  }
}
