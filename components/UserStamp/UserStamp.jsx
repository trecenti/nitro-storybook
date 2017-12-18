/* @flow */

import React from 'react'

import moment from 'moment'
import Avatar from '../Avatar/Avatar'
import Text from '../Text/Text'

import styles from './styles.scss'

type UserStampProps = {|
  action: string,
  date: string,
  name: string,
  thumbUrl: string,
|}

const DateFormat = 'MMM Do, YYYY'

const UserStamp = ({ thumbUrl, name, action, date }: UserStampProps) => (
  <div className={styles['user-stamp']}>
    <Avatar
        size="smaller"
        thumb={thumbUrl}
    />
    <div>
      <p className='m-0 ml-1'>
        <Text color={'ink'}>{action} {moment(date).format(DateFormat)}</Text>
      </p>
      <p className='m-0 ml-1'>
        <Text color={'ink-lighter'}>{`by ${name}`}</Text>
      </p>
    </div>
  </div>
)

export default UserStamp