/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './leaderboard.scss'
import LeaderboardItem from '../TVSidebar/LeaderboardItem'

type Props = {
  animate: boolean,
  list: Array<any>,
  speed: any
}

export default class Leaderboard extends React.Component<Props> {
  static defaultProps = {
    animate: true,
    list: [],
    speed: 120
  }
  props: Props

  render() {
    const {
      list,
      animate,
      speed
    } = this.props
    const css = [
      styles[`leaderboard`]
    ]
    return (
      <div className={classnames(css)}>
        {
          [...list].map((item, index) => {
            const waitTime = speed*(index+ 1);
            return (
              <LeaderboardItem
                  active={index==0}
                  animate={animate}
                  key={index}
                  leftText={item.leftText}
                  rightText={item.rightText}
                  title={item.title}
                  wait={waitTime}
              />
            )
          })
        }
      </div>
    )
  }
}
