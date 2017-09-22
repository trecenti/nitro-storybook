import React from "react"
import DateTimePicker from "./DateTimePicker"

import { select, boolean } from "@storybook/addon-knobs"

import styles from './story-styles.scss'

export default function DateTimePickerStory(stories) {
  stories.add("DateTimePicker",
    () => {
      const props = {
        datePickerProps: {
          disabled: boolean("datePickerProps.disabled", false),
          timeFormat: ""
        },
        timePickerProps: {
          clock: select("timePickerProps.clock", [12, 24], 12),
          disabled: boolean("timePickerProps.disabled", false),
        },
        onChange: () => {},
        className: styles.root,
      }
      return (
        <DateTimePicker {...props}/>
      )
    }
  )
}
