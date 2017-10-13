/* @flow */

export type SurveyQuestions = [
  {
    question: string,
    answers: [{
      label: string,
      value: string | number | Object,
    }],
  }
]