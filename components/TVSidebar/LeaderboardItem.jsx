/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './leaderboard-item.scss'
import Avatar from '../Avatar/Avatar'
import AnimatedContainer from '../TVSidebar/AnimatedContainer'

type Props = {
  className: string,
  animate: boolean,
  active: boolean,
  wait: any,
  title: string,
  leftText: string,
  rightText: string
}

export default class LeaderboardItem extends React.Component<Props> {
  static defaultProps = {
    className: "",
    animate: true,
    active: false,
    title: "Leaderboard Item",
    leftText: "Left Text",
    rightText: "Right Text"
  }

  state = {
    showItem: false,
  }

  componentWillMount() {
    const {wait} = this.props
    if(wait) {
      setTimeout(() => {
        this.setState({showItem: true})
      }, wait)
    }
  }
  props: Props

  render() {
    const {
      className,
      animate,
      active,
      title,
      leftText,
      rightText
    } = this.props
    const css = [
      className,
      styles[`leaderboard-item`],
      active ? styles[`active`] : ``
    ]
    const activeBox = active ? ["sky-dark", "power-gold"] : ["sky-dark", "power-royal"];
    return (
      <div>
        <If condition={this.state.showItem}>
          <div className={classnames(css)}>
            <div className={styles[`item-avatar`]}>
              <AnimatedContainer
                  animate={animate}
                  speed="faster"
              >
                <Avatar
                    disableLink={false}
                    size="base"
                    thumb="https://i.giphy.com/l46CjoMYO5n2hQnWE.gif"
                    url="https://i.giphy.com/l46CjoMYO5n2hQnWE.gif"
                />
              </AnimatedContainer>
            </div>


            <div className={styles[`stat-container`]}>
              <AnimatedContainer
                  animate={animate}
                  border="true"
                  feedback="true"
                  position="right"
                  speed="faster"
                  type="slide"
              >
                <div className={styles[`stat-container-top`]}>
                  <AnimatedContainer
                      animate={animate}
                      levels={["ink-lightest", "ink", "power-navy"]}
                      lined="true"
                      position="top"
                      speed="fast"
                  >
                    <p>{title}</p>
                  </AnimatedContainer>
                </div>
                <div className={styles[`stat-container-bottom`]}>
                  <div className={styles[`stat-left`]}>
                    <AnimatedContainer
                        animate={animate}
                        levels={activeBox}
                        position="top"
                        speed="fast"
                    >
                      <p>{leftText}</p>
                    </AnimatedContainer>
                  </div>
                  <div className={styles[`stat-right`]}>
                    <AnimatedContainer
                        animate={animate}
                        levels={["none", "blank"]}
                        position="top"
                        speed="faster"
                    >
                      <p>{rightText}</p>
                    </AnimatedContainer>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </If>
      </div>
    )
  }
}
