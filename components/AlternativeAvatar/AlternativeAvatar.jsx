/* @flow */

import React from 'react'
import classnames from 'classnames'
import { isEmpty, map } from 'lodash'

import styles from './alternative_avatar.scss'

import Avatar from '../Avatar/Avatar'

type Props = {
  url: string,
  personName: string,
  className: string,
}

type State = {
  showInitials: boolean
}

const initials = (name: string): string => (
  map(name.split(/\s/), name => name[0])
)

class AlternativeAvatar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { showInitials: false }
  }

  state: State

  componentWillReceiveProps(nextProps) {
    this.setState({ showInitials: isEmpty(nextProps.url) })
  }

  props: Props

  handleImageLoadError = () => {
    this.setState({ showInitials: true })
  }

  render() {
    const {
      url,
      className,
      personName,
    } = this.props

    return (
      <div className={classnames([className, styles['alternative-avatar']])}>
        <Choose>
          <When condition={!this.state.showInitials}>
            <Avatar
                alt={personName}
                disableLink
                onError={this.handleImageLoadError}
                showPopover={false}
                size={'base'}
                thumb={url}
            />
          </When>
          <Otherwise>
            <p>{initials(personName)}</p>
          </Otherwise>
        </Choose>
      </div>
    )
  }
}

export default AlternativeAvatar
