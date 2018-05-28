import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import {
  FormControl,
} from 'react-bootstrap'

import moment from 'moment'
require('moment-timezone')

import Datetime from 'react-datetime'

export type Props = {
  className: string,
  defaultValue: string,
  errorClass?: string,
  inputProps: Object<{
    type: "text"
  }>,
  isValidDate: () => boolean,
  labelInside: boolean,
  labelText: string,
  multiInput: boolean,
  onChange: () => mixed,
  dateFormat: string,
  timeFormat: string,
  closeOnSelect: boolean,
  timeZone: string,
  required: boolean,
  value: string,
}

export default class DatePicker extends React.Component<Props> {

  static defaultProps = {
    className: "",
    errorClass: "has-error",
    inputProps: {
      type: "text",
    },
    onChange: function(){},
    labelInside: true,
    multiInput: false,
    dateFormat: "MM/DD/YYYY",
    closeOnSelect: true,
    timeZone: null,
  }

  state = {
    open: false,
    valid: true,
  }

  componentWillMount() {
    const defaultValue = moment(this.props.defaultValue || "")
    if(defaultValue.isValid()) this.handleOnChange(defaultValue)
  }

  handleOnChange = (dateTime) => {
    const {timeFormat} = this.props
    if(dateTime.format && dateTime.isValid()) {
      this.setState({valid: true})
      const dt = this.props.timeZone ? moment.tz(dateTime) : dateTime
      setTimeout(() => {
        this.props.onChange(dt.format(timeFormat && timeFormat !== "" ? "YYYY-MM-DDTHH:mm:00Z" : "YYYY-MM-DD"))
      }, 100)
    } else {
      this.setState({valid: false})
      this.props.onChange("")
    }
  }

  renderInput = (inputProps, openCalendar) => {
    const {
      labelText,
      required,
    } = this.props

    return (
      <span className="d-flex">
        <If condition={labelText}>
          <label>
            <If condition={required}>{`* `}</If>
            {labelText}
          </label>
        </If>
        <FormControl {...inputProps}/>
        <span
            className="input-group-addon"
            onClick={openCalendar}
        >
          <FontAwesome name="calendar"/>
        </span>
      </span>
    )
  }

  render() {
    const {
      className,
      defaultValue,
      dateFormat,
      errorClass,
      isValidDate,
      timeFormat,
      closeOnSelect,
      timeZone,
      required,
      labelInside,
      multiInput,
      value,
    } = this.props

    const inputProps = this.props.inputProps
    if(required) inputProps.required = "required"

    const dateTimeProps = {
      className: classnames([
        className,
        "react-datetime",
        this.state.valid ? null : errorClass,
        labelInside ? "label-inside" : null,
        multiInput ? "multi-input-group-item" : null,
      ]),
      closeOnSelect,
      dateFormat,
      inputProps,
      isValidDate,
      onChange: this.handleOnChange,
      renderInput: this.renderInput,
      timeFormat,
      timeZone,
    }

    const formattedDate = moment(defaultValue || value).format(dateFormat)
    dateTimeProps.value = formattedDate === "Invalid date" ? "" : formattedDate

    return (
      <Datetime {...dateTimeProps}/>
    )
  }
}
