import React from "react"
import DateTimePicker from "./DateTimePicker"
import classnames from "classnames"

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
        onChange: () => {}
      }
      const css = [
        "container",
        "mt-4",
        styles.root,
      ]
      return (
        <div className={classnames(css)}>
          <div className="card p-4">
            <DateTimePicker {...props}/>
          </div>
        </div>
      )
    }
  )
}
