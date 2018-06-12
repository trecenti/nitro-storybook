import React from "react"
import moment from "moment"
import classnames from "classnames"
import { DatePicker, Props as DatePickerProps } from "../"

import styles from "./styles.scss"

export type Props = {
  ...DatePickerProps,
  fromDate: Object,
  toDate: Object,
}

const DateRangeInput = ({ className, fromDate, toDate, isValidDate, viewDate, ...props }) => {
  className = classnames(className, styles.dob)

  const isWithinRange = currentDate => {
    const afterFromDate = currentDate.isAfter(fromDate)
    const beforeToDate = currentDate.isBefore(toDate)

    if (fromDate && toDate) {
      return afterFromDate && beforeToDate
    } else if (fromDate) {
      return afterFromDate
    } else {
      return beforeToDate
    }
  }

  props.viewDate = viewDate || moment()
  props.isValidDate = isValidDate || isWithinRange

  return (
    <DatePicker {...props} className={className} />
  )
}

DateRangeInput.defaultProps = {
  value: "",
}

export default DateRangeInput