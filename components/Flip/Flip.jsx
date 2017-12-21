/* @flow */

import React from 'react'
import classname from 'classnames'

import styles from './styles.scss'

type FlipProps = {
  children: React.ChildrenArray<React.Element<typeof FlipFront | typeof FlipBack>>,
  flipped: boolean,
}

type FlipSideProps = {
  children?: React.Node
}

const Flip = ({ children, flipped }: FlipProps) => (
  <div className={styles['flip-container']}>
    <div className={
        classname({
          [styles['flip']]: flipped,
          [styles['flap']]: !flipped,
        })
      }
    >
      {children}
    </div>
  </div>
)

// eslint-disable-next-line react/no-multi-comp
const FlipFront = ({ children }: FlipSideProps) => (
  <div className={styles.front}>{children}</div>
)

// eslint-disable-next-line react/no-multi-comp
const FlipBack = ({ children }: FlipSideProps) => (
  <div className={styles.back}>{children}</div>
)

Flip.Front = FlipFront
Flip.Back = FlipBack
export default Flip
