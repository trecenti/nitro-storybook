/* @flow */

import React from 'react'
import Icon from '../Icon/Icon'
import classnames from 'classnames'

import styles from './grade.scss'

type Props = {
  className: string,
  grade: number,
  starFullAt: number,
  starEmptyAt: number,
}

const gradeToStarIconName = (grade: number, starFullAt: number, starEmptyAt: number): string => {
  if (grade >= starFullAt) { return 'star' }
  if (grade <= starEmptyAt) { return 'star-o' }

  return 'star-half-full'
}

class Grade extends React.Component<Props> {
  static defaultProps = {
    starFullAt: 10,
    starEmptyAt: 0,
  }
  props: Props

  render() {
    const { grade, starFullAt, starEmptyAt, className } = this.props
    const classes = [
      className,
      styles.grade
    ]

    return (
      <div className={classnames(classes)}>
        <Icon
            className={styles.star}
            label=""
            name={gradeToStarIconName(grade, starFullAt, starEmptyAt)}
        />
        <div>
          <p>{grade}</p>
          <label>{'Grade'}</label>
        </div>
      </div>
    )
  }
}

export default Grade
