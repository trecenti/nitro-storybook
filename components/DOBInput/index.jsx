import React from "react"
import moment from "moment"
import { DateRangeInput, Props as DatePickerProps } from "../"

export type Props = {
  ...DatePickerProps,
  preventMinor: boolean,
}

const eighteenYearsAgo = moment().subtract(18, "years")

const DOBInput = ({ preventMinor, viewDate, ...props }) => {

  if (preventMinor) {
    props.viewDate = viewDate || eighteenYearsAgo
    props.toDate = eighteenYearsAgo
  }

  return (
    <DateRangeInput {...props} />
  )
}

DOBInput.defaultProps = {
  value: "",
  preventMinor: false,
}

export default DOBInput