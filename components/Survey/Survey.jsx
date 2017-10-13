/* @flow */

import React from 'react'

// import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import styles from './survey.scss'

import Wip from '../Wip/Wip'

import { SurveyQuestions } from '../types'
import Button from '../Button/Button'
import Panel from '../Panel/Panel'

type Props = {
  dismissable?: boolean,
  loading?: boolean,
  onChange: () => mixed,
  onDismiss: () => mixed,
  onSubmit: () => mixed,
  questions: SurveyQuestions,
  submitting: boolean,
}

export default class Survey extends React.Component<Props> {
  static defaultProps = {
    dismissable: true,
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
    ]
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
    return (<div/>)
  }
  renderBody() {
    const {
      questions,
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
    return (
      <Button className="btn-primary"
          text="Submit"
          type="submit"
      />
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
          <If condition={loading}>
            <div>
              <div className={styles.overlay}/>
              {this.renderBody()}
              {this.renderFooter()}
            </div>
          <Else/>
            {this.renderBody()}
            {this.renderFooter()}
          </If>
        </form>
      </Wip>
    )
  }
}