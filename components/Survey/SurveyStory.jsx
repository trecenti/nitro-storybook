import React from "react"

import Survey from './Survey'

// import { boolean } from "@storybook/addon-knobs"

export default function SurveyStory(stories) {
  stories.add("Survey",
    () => {
      return <Survey/>
    }
  )
}
