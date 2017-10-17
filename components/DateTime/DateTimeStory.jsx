
import React from "react"
import DateTime from "./DateTime"

import { text, select, boolean } from "@storybook/addon-knobs"

export default function DateTimeStory(stories) {
  stories.add("Date Time",
    () => {
      let props = {
        timeZone: text("timeZone", "CST"),
        month: text("month", "Dec"),
        time: text("time", "4:00p"),
        day: text("Day", "31"),
        theme: select("Theme", ["time", "date"], "time"),
      }
      return (
        <div>
          <DateTime {...props}/>
          <br/>
          <DateTime theme="date" day="13" month="Nov" time="4:34p" timeZone="EDT" />
        </div>
      )
    }
  )
}
