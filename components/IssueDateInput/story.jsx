import React from "react"
import moment from "moment"
import IssueDateInput from "./"

import { text } from "@storybook/addon-knobs"

import 'react-datetime/css/react-datetime.css'

export default function IssueDateInputStory(stories) {
  stories.add("IssueDateInput", () => {
    const props = {
      viewDate: text("Default Calendar Date", moment())
    }

    return (
      <IssueDateInput {...props} />
    )
  })
}
