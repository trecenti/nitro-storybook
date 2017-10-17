/* @flow */

import React from 'react'
import classnames from 'classnames'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'


import styles from './styles.scss'

type Props = {
  time: string,
  timeZone: string,
  month: string,
  day: string,
  theme: "date" | "time",
  className: string,
}

export default class DateTime extends React.Component<Props> {
  static defaultProps = {
    time: "",
    timeZone: "",
    month: "",
    day: "",
    theme: "date",
    className: "",
  }
  props: Props
  render() {
    const {
      className,
      time,
      timeZone,
      month,
      day,
      theme,
    } = this.props
    const css = [
      className,
    ]
    return (
      <div>
        <If condition={theme == 'time'}>
          <div className={classnames(css, styles["date-time"])} >
            <Text bold size="large" color="ink" className={classnames(styles["date-time-time"])}>{time}</Text>
            <Text textTransform="uppercase" size="smallest" color="ink-lightest" className={classnames(styles["date-time-timezone"])}>{timeZone}</Text>
          </div>
          <div className={classnames(styles["date-time-calendar"])}>
            <Text bold textTransform="uppercase" size="smaller" color="ink">
              <Icon color="power-red" name="calendar-o" className={classnames("text-power-red", styles["date-time-calendar-icon"])} />
              {month} {day}
            </Text>
          </div>
        <Else/>
          <div className={styles["time-date"]}>
            <div className={classnames(styles["time-date-calendar"])}>
              <Text bold textTransform="uppercase" size="large" color="ink" className={styles["time-date-day"]}>{day}</Text>
              <Text textTransform="uppercase" size="smallest" color="ink-lightest" className={styles["time-date-month"]}>{month}</Text>
            </div>

            <div className={classnames(css, styles["time-date-time-wrap"])} >
              <Text size="small" color="ink" className={classnames(styles["time-date-time"])}>{time}</Text>
              <Text textTransform="uppercase" size="smallest" color="ink" className={classnames(styles["time-date-timezone"])}>
                <Icon name="map-marker" className={classnames("text-ink-lightest", styles["time-date-calendar-icon"])} />
                {timeZone}
              </Text>
            </div>
          </div>

        </If>
      </div>

    )
  }
}
