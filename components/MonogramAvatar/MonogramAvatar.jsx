/* @flow */

import React from 'react'
import classnames from 'classnames'
import { isEmpty, map } from 'lodash'

import styles from './monogram_avatar.scss'

import Avatar from '../Avatar/Avatar'

type Props = {
  url: string,
  personName: string,
  className: string,
  border: boolean,
}

type State = {
  showInitials: boolean
}

const initials = (name: string): string => (
  map(name.split(/\s/), name => name[0])
)

class MonogramAvatar extends React.Component<Props, State> {
  static defaultProps = {
    border: true
  }
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
      border,
    } = this.props

    const classes = [
      className,
      styles['monogram-avatar'],
      (this.state.showInitials ? styles['initials'] : null),
      (border ? styles['with-border'] : null),
    ]

    return (
      <div className={classnames(classes)}>
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

export default MonogramAvatar
