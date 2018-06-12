import React from "react"
import moment from "moment"
import { DateRangeInput, Props as DatePickerProps } from "../"

export type Props = {
  ...DatePickerProps,
  preventMinor: boolean,
}

const DOBInput = ({ className, preventMinor, viewDate, ...props }) => {

  if (preventMinor) {
    props.viewDate = viewDate || moment()
    props.toDate = moment().subtract(18, "years")
  }

  return (
    <DateRangeInput {...props} className={className} />
  )
}

DOBInput.defaultProps = {
  value: "",
}

export default DOBInput