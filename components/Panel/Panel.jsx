/* @flow */

import React, { Component } from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'
import FontAwesome from 'react-fontawesome'

type Props = {
  bodyClass?: string,
  children: Array<Component>,
  className?: string,
  collapsed?: boolean,
  collapsible?: boolean,
  headingLinks?: Array<Component>,
  title?: string,
  titleIcon?: string,
}

import styles from './panel.scss'

export default class Panel extends Component<Props> {
  static defaultProps = {
    className: "panel-default",
    collapsed: false,
    collapsible: false,
  }

  state = {
    collapsed: false,
  }

  componentWillMount() {
    this.setState({collapsed: this.props.collapsed})
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
      titleIcon,
    } = this.props
    return (
      <h3 className="panel-title">
        <If condition={titleIcon}>
          <FontAwesome
              className="mr-3"
              name={titleIcon}
          />
        </If>
        {title}
      </h3>
    )
  }

  renderToggle() {
    const {collapsed} = this.state
    const toggle = () => {
      this.setState({collapsed: !this.state.collapsed})
    }
    return (
      <FontAwesome
          name={`angle-${collapsed ? 'down' : 'up'}`}
          onClick={toggle}
      />
    )
  }

  renderBody() {
    const {
      children,
      collapsible,
      bodyClass,
    } = this.props

    if (collapsible && this.state.collapsed) return

    return (
      <div className={classnames("panel-body", bodyClass)}>
        {children}
      </div>
    )
  }

  render() {
    const {
      className,
      collapsible,
      title,
      headingLinks,
    } = this.props

    const {
      collapsed,
    } = this.state

    const css = [
      styles.panel,
      "panel",
      collapsed ? styles["panel-collapsed"] : null,
      collapsible ? styles["panel-collapsible"] : null,
      className,
    ]

    return (
      <div className={classnames(css)}>
        <If condition={!isEmpty(title) || !isEmpty(headingLinks)}>
          <div className="panel-heading clearfix">
            <div className={`p-0 col-md-${collapsible ? '6' : '12'}`}>
              {this.renderHeadingLinks()}
              {this.renderHeadingTitle()}
            </div>
            <If condition={collapsible}>
              <div className="p-0 col-md-6 text-right">
                {this.renderToggle()}
              </div>
            </If>
          </div>
        </If>
        {this.renderBody()}
      </div>
    )
  }
}
