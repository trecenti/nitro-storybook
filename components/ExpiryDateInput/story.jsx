import React from "react"
import moment from "moment"
import ExpiryDateInput from "./"

import { text } from "@storybook/addon-knobs"

import 'react-datetime/css/react-datetime.css'

export default function ExpiryDateInputStory(stories) {
  stories.add("ExpiryDateInput", () => {
    const props = {
      viewDate: text("Default Calendar Date", moment())
    }

    return (
      <ExpiryDateInput {...props} />
    )
  })
}
