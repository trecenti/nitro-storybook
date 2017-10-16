import React from "react"

import Survey from './Survey'

import { boolean } from "@storybook/addon-knobs"

export default function SurveyStory(stories) {
  stories.add("Survey",
    () => {
      const showErrors = boolean("show errors", false)
      const props = {
        canSubmit: boolean("canSubmit", true),
        errors: showErrors ? ["Something wrong", "Something else not right"] : [],
        loading: boolean("loading", false),
        submitting: boolean("submitting", false),
      }
      return <Survey {...props} />
    }
  )
}
