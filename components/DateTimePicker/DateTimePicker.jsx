import React from "react"
import classnames from "classnames"
import moment from "moment"

import DatePicker from "../DatePicker/DatePicker"
import TimePicker from "../TimePicker/TimePicker"

import styles from './styles.scss'

type Props = {
  className: string,
  colClassNames: Array<string>,
  datePickerProps: Object<{
    disabled: boolean | "disabled",
    dateFormat: string,
    timeFormat: string,
  }>,
  defaultValue: string | Object,
  onChange: () => mixed,
  timePickerProps: Object<{
    clock: 12 | 24,
    disabled: boolean | "disabled",
    multiGroup: boolean,
    labelInside: boolean,
  }>
}

export default class DateTimePicker extends React.Component<Props> {

  static defaultProps = {
    className: "row",
    colClassNames: [
      "col-sm-6",
      "col-sm-6",
    ],
    datePickerProps: {
      disabled: false,
      dateFormat: "MM/DD/YYYY",
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
    const {time} = this.state
    this.setState({date})
    if(!time) return
    this.props.onChange(`${date} ${time}`)
  }

  handleOnTimeChanged = (time) => {
    const {date} = this.state
    this.setState({time})
    if(!date) return
    this.props.onChange(`${date} ${time}`)
  }

  render() {
    const {
      className,
      colClassNames,
      datePickerProps,
      defaultValue,
      timePickerProps,
    } = this.props

    const defaultDate = moment(defaultValue)
    const defaultDateValue = defaultDate.isValid() ? defaultDate.format(datePickerProps.dateFormat || "MM/DD/YYYY") : null

    const css = [
      className,
      styles.dateTimePicker,
    ]

    return (
      <div className={classnames(css)}>
        <div className={colClassNames[0]}>
          <DatePicker
              defaultValue={defaultDateValue}
              onChange={this.handleOnDateChanged}
              {...datePickerProps}
          />
        </div>
        <div className={colClassNames[1]}>
          <TimePicker
              defaultValue={defaultValue}
              onChange={this.handleOnTimeChanged}
              {...timePickerProps}
          />
        </div>
      </div>
    )
  }
}