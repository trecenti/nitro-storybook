/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './animated-container.scss'

type Props = {
  children?: Array<React.Node>,
  animate: boolean,
  speed: string,
  timing: string,
  position: string,
  levels: Array<string>,
  type: string,
  border: boolean,
  feedback: boolean,
  lined: boolean
}

export default class AnimatedContainer extends React.Component<Props> {
  static defaultProps = {
    animate: false,
    speed: "fast",
    timing: "ease",
    position: "left",
    type: "flip",
    border: false,
    feedback: false,
    lined: false,
    levels: ['blank', 'power-royal', 'power-navy', 'black'] // Last color is on top
  }
  props: Props

  render() {
    const {
      children,
      animate,
      speed,
      timing,
      position,
      levels,
      type,
      border,
      feedback,
      lined
    } = this.props
    const css = [
      styles[`animated-container`],
      styles[`speed-${speed}`],
      styles[`timing-${timing}`],
      styles[`position-${position}`],
      styles[`animation-${type}`],
      lined ? styles[`lined-bottom`] : ``,
      animate ? styles[`animate`] : ``,
      border ? styles[`has-border`] : ``,
      feedback ? styles[`show-feedback`] : ``
    ]
    return (
      <div className={classnames(css)}>
        <If condition={type==`flip`}>
          {
            [...levels].map((item, index) => {
              const itemCSS = [
                styles[`level`],
                `bg-${item}`
              ]
              return (
                <span
                    className={classnames(itemCSS)}
                    key={index}
                >
                  <If condition={index == (levels.length - 1)}>
                    <div className={styles[`level-child`]}>
                      {children}
                    </div>
                  </If>
                </span>
              )
            })
          }
        </If>
        <If condition={type==`slide`}>
          {children}
        </If>
      </div>
    )
  }
}
