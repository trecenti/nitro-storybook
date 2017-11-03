/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'

import Icon from '../Icon/Icon'
import Panel from '../Panel/Panel'
import Text from "../Text/Text"

import styles from './styles.scss'

type Props = {
  className: string,
  description: string,
  displayName: string,
  downloadUrl: string,
  layout: string,
  openNewTab: boolean,
  type: string,
  children: Array<Component>
}

export default class FileCard extends React.Component<Props> {
  static defaultProps = {
    className: "",
    layout: "vertical",
    openNewTab: false,
    type: "file"
  }
  props: Props

  renderIcon() {
    const {
      downloadUrl,
      openNewTab,
      displayName,
      type,
    } = this.props
    const IconComponent = (
      <Icon
          className={styles[`icon-large`]}
          label=""
          name={`${type}-o`}
          size="lg"
          title={displayName}
      />
    )
    return (
      <If condition={downloadUrl}>
        <a
            href={downloadUrl}
            target={openNewTab ? '_blank' : '_parent'}
        >
          {IconComponent}
        </a>
      <Else/>
        {IconComponent}
      </If>
    )
  }

  renderDisplayName() {
    const {
      displayName,
      downloadUrl,
      openNewTab
    } = this.props
    const DisplayNameComponent = <Text bold="true">{displayName}</Text>
    return (
      <h5 className="m-0">
        <If condition={downloadUrl}>
          <a
              href={downloadUrl}
              target={openNewTab ? '_blank' : '_parent'}
          >
            {DisplayNameComponent}
          </a>
        <Else/>
          {DisplayNameComponent}
        </If>
      </h5>
    )
  }

  renderDescription() {
    const {
      description
    } = this.props
    return (
      <p className="m-0">
        <Text>{description}</Text>
      </p>
    )
  }

  render() {
    const {
      className,
      description,
      displayName,
      layout,
      children
    } = this.props
    const css = [
      className,
      styles[`file-card`],
      styles[`layout-${layout}`],
    ]
    return (
      <Panel bodyClass={"p-0"}>
        <div className={classnames(css)}>
          <div className={styles[`file-type-box`]}>
            {this.renderIcon()}
          </div>
          <div className={styles[`file-content-box`]}>
            <If condition={displayName}>{this.renderDisplayName()}</If>
            <If condition={description}>{this.renderDescription()}</If>
            <If condition={children}>{children}</If>
          </div>
        </div>
      </Panel>
    )
  }
}
