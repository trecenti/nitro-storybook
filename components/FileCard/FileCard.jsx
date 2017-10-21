/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'

import Icon from '../Icon/Icon'
import Panel from '../Panel/Panel'

import styles from './styles.scss'

type Props = {
  className: string,
  layout: string,
  type: string,
  children: Array<Component>
}

export default class FileCard extends React.Component<Props> {
  static defaultProps = {
    className: "",
    layout: "vertical",
    type: "file"
  }
  props: Props
  render() {
    const {
      className,
      layout,
      type,
      children
    } = this.props
    const css = [
      className,
      styles[`file-card`],
      styles[`layout-${layout}`],
    ]
    return (
      <Panel>
        <div className={classnames(css)}>
          <div className={styles[`file-type-box`]}>
            <Icon
                className={styles[`icon-large`]}
                label=""
                name={`${type}-o`}
                size="lg"
                title="Battery Percentage"
            />
          </div>
          <If condition={children}>
            <div className={styles[`file-content-box`]}>
              {children}
            </div>
          </If>
        </div>
      </Panel>
    )
  }
}
