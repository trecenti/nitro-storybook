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

  const isWithinRange = currentDate => currentDate.isAfter(fromDate) && currentDate.isBefore(toDate)

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