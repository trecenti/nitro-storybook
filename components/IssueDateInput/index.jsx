import React from "react"
import moment from "moment"
import { DateRangeInput, Props as DatePickerProps } from "../"

export type Props = {
  ...DatePickerProps,
}

const IssueDateInput = ({ className, viewDate, ...props }) => {

  props.viewDate = viewDate || moment()
  props.toDate = moment()

  return (
    <DateRangeInput {...props} className={className} />
  )
}

IssueDateInput.defaultProps = {
  value: "",
}

export default IssueDateInput