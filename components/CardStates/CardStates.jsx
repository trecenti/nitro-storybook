/* @flow */

import React from 'react'
import classnames from 'classnames/bind'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'

import styles from './styles.scss'

type Props = {
  style: "primary" | "default" | "success" | "danger" | "warning" | "info" | "inverse",

}

export default class CardStates extends React.Component<Props> {
  static defaultProps = {
  className: "card-state-default",
  style: "default",

  }

  props: Props

  render() {
    const {
        style
     } = this.props
    const cardCSS = [
      styles[`card`],
      styles[`card-${style}`],
    ]

    return <div className={classnames(cardCSS)}>
<div><Icon size="5x" color="white" name="check" className="notifyIcon" label=""/></div>
    <div classNames="p-3">  <Text size="font-large" color="white"> Are you replacing this homeowner? </Text></div>

      <div className="row pb-4 ">
        <div className="col-md-12 col-sm-12 col-xs-12  ">
        <Button className="btn-ghost-white mx-2" text="Yes" type="button" />
        <Button className="btn-ghost-white mx-2" text="No" type="button" /></div>
      </div>
    </div>



  }
}
