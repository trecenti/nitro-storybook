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
  steps: Array<Step>
}

const StepMeter = ({
  steps,
  className
}: Props) => {
  const classes = [
    className,
    styles['step-meter'],
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
            {step.name}
          </li>
        ))
      }
    </ul>
  )
}

export default StepMeter
