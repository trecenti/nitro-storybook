import React from "react"
import moment from "moment"
import DOBInput from "./"

import { boolean, text } from "@storybook/addon-knobs"

import 'react-datetime/css/react-datetime.css'

const eighteenYearsAgo = moment().subtract(18, "years")

export default function DOBInputStory(stories) {
  stories.add("DOBInput", () => {
    const props = {
      preventMinor: boolean("Prevent Minor", true),
      viewDate: text("Default Calendar Date", eighteenYearsAgo)
    }

    return (
      <DOBInput {...props} />
    )
  })
}
