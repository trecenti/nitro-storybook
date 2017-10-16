/* @flow */

import React from 'react'

// import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import styles from './survey.scss'

import Wip from '../Wip/Wip'
import {
  Errors,
  Spinner,
} from '..'

import { SurveyQuestions } from '../types'

import {
  Button,
  Icon,
  Panel,
} from '../index'

type Props = {
  canSubmit?: boolean,
  dismissable?: boolean,
  errors: Array<string>,
  loading?: boolean,
  onChange: () => mixed,
  onDismiss: () => mixed,
  onSubmit: () => mixed,
  questions: SurveyQuestions,
  submitting: boolean,
}

export default class Survey extends React.Component<Props> {
  static defaultProps = {
    canSubmit: true,
    dismissable: true,
    errors: [],
    loading: false,
    modal: false,
    onChange: function(){},
    onDismiss: function(){},
    onSubmit: function(){},
    questions: [
      {
        question: 'Do you like food?',
        answers: [
          {
            label: 'Yes, I do!',
            selected: true,
            value: 1,
          },
          {
            label: 'No, I don\'t!',
            selected: false,
            value: 0,
          },
          {
            label: 'Kinda..',
            selected: false,
            value: 2,
          }
        ],
      },
      {
        question: 'Do you like work?',
        answers: [
          {
            label: 'Yes, I do!',
            selected: true,
            value: 1,
          },
          {
            label: 'No, I don\'t!',
            selected: false,
            value: 0,
          },
          {
            label: 'Kinda..',
            selected: false,
            value: 2,
          }
        ],
      }
    ],
    submitting: false,
  }
  props: Props

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  }

  handleOnChange(qaIdx) {
    this.props.onChange(...qaIdx)
  }

  renderHeader() {
    const {
      errors,
    } = this.props
    return (
      <div>
        <Errors messages={errors} />
      </div>
    )
  }
  renderBody() {
    const {
      questions,
      submitting,
    } = this.props
    const css = classnames([
      'panel-default',
      styles.surveyQuestion,
    ])

    return (
      <ol className={styles['survey-question-list']}>
        {questions.map((q, i) =>
          (
            <li
                className={styles['survey-question']}
                key={`question-li-${i}`}
            >
              <Panel
                  className={css}
                  flush
                  key={`question-${i}`}
                  title={q.question}
              >
                <ul className={styles['survey-question-answer-list']}>
                  {q.answers.map((answer, x) => {
                    let otherProps = {
                      onChange: this.handleOnChange.bind(this, [i, x]),
                    }
                    if(submitting) otherProps.disabled = true
                    if(answer.selected) otherProps.checked = 'checked'

                    return (
                      <li
                          className={styles['survey-question-answer']}
                          key={`question-${i}-answer-${x}-li`}
                      >
                        <label>
                            <input
                                name={`question-${i}-answer`}
                                type="radio"
                                value={answer.value}
                                {...otherProps}
                            />
                            <span>
                              {answer.label}
                            </span>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </Panel>
            </li>
          )
        )}
      </ol>
    )
  }
  renderFooter() {
    const {
      canSubmit,
      submitting,
    } = this.props

    let props = {
      className: "btn-primary",
      text: submitting ? "Submitting Answers" : "Submit Answers",
      type: submitting ? "" : "submit",
    }
    if(!canSubmit || submitting) props.disabled = true
    if(submitting) {
      props.icon = (
        <Icon
            className="mr-3 fa-spin"
            name="spinner"
            spin
        />
      )
    }

    return (
      <Button {...props} />
    )
  }
  renderLoading() {
    return (
      <div className={styles.overlay}>
        <Spinner
            className="centered"
        />
      </div>
    )
  }
  render() {
    const {
      loading,
    } = this.props

    return (
      <Wip
          branch="feature/survey-modal"
          prNumber={7}
      >
        <form
            className={styles.survey}
            onSubmit={this.handleOnSubmit}
        >
          <div>
            <If condition={loading}>{this.renderLoading()}</If>
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
          </div>
        </form>
      </Wip>
    )
  }
}