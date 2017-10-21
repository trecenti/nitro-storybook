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

  state = {
    items: [],
    renderKey: Date.now(),
  }

  componentWillMount() {
    this.handleAnimate()
  }
  props: Props

  handleAnimate = () => {
    const {list} = this.props
    this.setState({items: [], renderKey: Date.now()})
    if(list) {
      setTimeout(() => {
        this.setState({items: list, renderKey: Date.now()})
      }, 100)
    }
  }

  render() {
    const {
      animate,
      speed
    } = this.props
    const css = [
      styles[`leaderboard`]
    ]
    return (
      <div className={classnames(css)}>
        {
          [...this.state.items].map((item, index) => {
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
