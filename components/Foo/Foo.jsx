/* @flow */

import React from 'react'
import styles from './styles.scss'

type Props = {}

export default class Foo extends React.Component<Props> {
  static defaultProps = {}
  props: Props
  render() {
    return <span className={styles.foo}>{`I'm a Foo`}</span>
  }
}
