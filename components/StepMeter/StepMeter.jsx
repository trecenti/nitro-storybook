/* @flow */

import React from 'react'
import { map } from 'lodash'
import classnames from 'classnames'

import Icon from '../Icon/Icon'
import styles from './step_meter.scss'

type States = 'done' | 'started' | 'none'

type Step = {|
  id: number,
  name: string,
  state: States,
|}

type Props = {
  className: string,
  steps: Array<Step>,
  type: string,
}

const StepMeter = ({
  steps,
  type,
  className
}: Props) => {
  const classes = [
    className,
    styles['step-meter'],
    styles[`type-${type}`],
  ]
  return (
    <ul className={classnames(classes)}>
      {
        map(steps, (step, idx) => (
          <li
              className={`text-uppercase ${styles[step.state]}`}
              key={idx}
          >
            <If condition={step.state == 'done'}>
              <Icon
                  label=""
                  name="check"
              />
            </If>
            <span>
              {step.name}
            </span>
          </li>
        ))
      }
    </ul>
  )
}

export default StepMeter
