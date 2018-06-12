import React from "react"
import moment from "moment"
import DateRangeInput from "./"

import { text } from "@storybook/addon-knobs"

import 'react-datetime/css/react-datetime.css'

const eighteenYearsAgo = moment().subtract(18, "years")
const onehundredYearsAgo = moment().subtract(100, "years")

export default function DateRangeInputStory(stories) {
  stories.add("DateRangeInput", () => {
    const props = {
      fromDate: text("From Date", onehundredYearsAgo),
      toDate:   text("To Date", eighteenYearsAgo),
      viewDate: text("Default Calendar Date", eighteenYearsAgo)
    }

    return (
      <DateRangeInput {...props} />
    )
  })
}
