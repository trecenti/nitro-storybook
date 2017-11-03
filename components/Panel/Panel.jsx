/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

type Props = {
  children: Array<Component>,
  className?: string,
  bodyClass?: string,
  headingLinks?: Array<Component>,
  title?: string,
}

import styles from './panel.scss'

export default class Panel extends Component<Props> {
  static defaultProps = {
    className: "panel-default",
  }

  props: Props

  renderHeadingLinks() {
    const {
      headingLinks,
    } = this.props
    if(!headingLinks) return null
    return (
      <div className="panel-links">
        {headingLinks.map()}
      </div>
    )
  }

  renderHeadingTitle() {
    const {
      title,
    } = this.props
    return (
      <h3 className="panel-title">
        {title}
      </h3>
    )
  }

  renderBody() {
    const {
      children,
      bodyClass,
    } = this.props

    return (
      <div className={classnames("panel-body", bodyClass)}>
        {children}
      </div>
    )
  }

  render() {
    const css = [
      styles.panel,
      "panel",
      this.props.className,
    ]
    const { title, headingLinks } = this.props

    return (
      <div className={classnames(css)}>
        <If condition={!isEmpty(title) || !isEmpty(headingLinks)}>
          <div className="panel-heading clearfix">
            {this.renderHeadingLinks()}
            {this.renderHeadingTitle()}
          </div>
        </If>
        {this.renderBody()}
      </div>
    )
  }
}
