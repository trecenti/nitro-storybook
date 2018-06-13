import React from "react"
import classnames from "classnames"
import moment from "moment"
import { get } from "lodash"

import DatePicker from "../DatePicker/DatePicker"
import TimePicker from "../TimePicker/TimePicker"

import styles from './styles.scss'

type Props = {
  className: string,
  datePickerProps: Object<{
    disabled: boolean | "disabled",
    dateFormat: string,
    timeFormat: string,
  }>,
  onChange: () => mixed,
  timePickerProps: Object<{
    clock: 12 | 24,
    disabled: boolean | "disabled",
    multiGroup: boolean,
    labelInside: boolean,
  }>,
  value: string | Object,
}

const defaultDateFormat = "MM/DD/YYYY"

export default class DateTimePicker extends React.Component<Props> {

  static defaultProps = {
    className: "",
    datePickerProps: {
      disabled: false,
      dateFormat: defaultDateFormat,
      timeFormat: "",
    },
    timePickerProps: {
      clock: 12,
      disabled: false,
      multiGroup: true,
      labelInside: true,
    }
  }

  state = {
    date: null,
    time: null,
  }

  props: Props

  handleOnDateChanged = (date) => {
    const { time } = this.state
    this.setState({date})
    if(!time) return
    this.props.onChange(`${this.formatDate(date)} ${time}`)
  }

  handleOnTimeChanged = (time) => {
    const {date} = this.state
    this.setState({time})
    if(!date) return
    this.props.onChange(`${this.formatDate(date)} ${time}`)
  }

  formatDate(date) {
    const { datePickerProps } = this.props
    const dateFormat = get(datePickerProps, "dateFormat", defaultDateFormat)
    return moment(date).format(dateFormat)
  }

  render() {
    const {
      className,
      datePickerProps,
      timePickerProps,
      value,
    } = this.props

    const defaultDate = moment(value)
    const defaultDateValue = defaultDate.isValid() ? this.formatDate(defaultDate) : null

    const css = [
      className,
      styles.dateTimePicker,
    ]

    return (
      <div className={classnames(css)}>
        <div className="multi-input-group full form-group">
          <DatePicker
              multiInput
              onChange={this.handleOnDateChanged}
              value={defaultDateValue}
              {...datePickerProps}
          />
          <div className="form-group multi-input-group-item">
            <TimePicker
                onChange={this.handleOnTimeChanged}
                value={value}
                {...timePickerProps}
            />
          </div>
        </div>
      </div>
    )
  }
}
