import React from "react"

import Survey from './Survey'

import { boolean } from "@storybook/addon-knobs"

export default function SurveyStory(stories) {
  stories.add("Survey",
    () => {
      const props = {
        canSubmit: boolean("canSubmit", true),
        errors: ["Something wrong", "Something else not right"],
        loading: boolean("loading", false),
        submitting: boolean("submitting", false),
      }
      return <Survey {...props} />
    }
  )
}
