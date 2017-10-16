/* @flow */

import React from 'react'
import classnames from 'classnames'

import MilestoneItem from './MilestoneItem'
import styles from './styles.scss'

type Props = {
  background: string,
  className: string,
  steps: any,
}

export default class Milestones extends React.Component<Props> {
  static defaultProps: {
    background: 'dark',
    className: "",
    steps: [],
  }
  props: Props

  render() {
    const {
      background,
      className,
      steps,
    } = this.props
    const css = [
      className,
      styles[`milestones`],
      styles[`background-${background}`],
    ]
    return (
      <span className={classnames(css)}>
        <ul>
          {
            [...steps].map((item, index) => {
              return (
                <MilestoneItem
                    key={index}
                    name={item.name}
                    status={item.status}
                />
              )
            })
          }
        </ul>
      </span>
    )
  }
}
