import React from "react"
import moment from "moment"
import DateRangeInput from "./"

import { text } from "@storybook/addon-knobs"

import 'react-datetime/css/react-datetime.css'

const now = moment()

export default function DateRangeInputStory(stories) {
  stories.add("DateRangeInput", () => {
    const props = {
      fromDate: text("From Date", now),
      toDate:   text("To Date", moment(now).add(10, "days")),
      viewDate: text("Default Calendar Date", now)
    }

    return (
      <DateRangeInput {...props} />
    )
  })
}
