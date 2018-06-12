import React from "react"
import moment from "moment"
import { DateRangeInput, Props as DatePickerProps } from "../"

export type Props = {
  ...DatePickerProps,
}

const ExpiryDateInput = ({ className, viewDate, ...props }) => {

  props.viewDate = viewDate || moment()
  props.fromDate = moment()

  return (
    <DateRangeInput {...props} className={className} />
  )
}

ExpiryDateInput.defaultProps = {
  value: "",
}

export default ExpiryDateInput