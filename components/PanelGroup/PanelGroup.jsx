import React from "react"
import Icon from "../Icon/Icon"

import {
  Panel as BootstrapPanel,
  PanelGroup as BootstrapPanelGroup
} from "react-bootstrap"

import Text from '../Text/Text'

import styles from "./PanelGroup.scss"

type PanelProps = {
  children?: string,
  collapsed?: boolean,
  icon?: any,
  name?: string,
  subtitle?: string,
  title?: string,
  toggleIconName?: string,
}

type PanelGroupProps = {
  activePanel?: string,
  className?: string,
  id?: string,
  inner?: boolean,
}

const Panel = ({ children, collapsed, icon, name, subtitle, title, toggleIconName, notification }: PanelProps) => {
  const rotateProps = collapsed ? { rotate: 180 } : {}
  const css = collapsed ? "panel-collapsed" : ""

  return (
    <BootstrapPanel eventKey={name} className={css}>
      <BootstrapPanel.Heading bsStyle="default">
        <BootstrapPanel.Toggle className="panel-toggle">
          <If condition={icon}>
            <div className="heading-icon">{icon}</div>
          </If>

          <BootstrapPanel.Title>
            <Text className="title" bold>{title}</Text>

            <If condition={subtitle}>
              <Text color="ink-lightest" className="subtitle">{subtitle}</Text>
            </If>
          </BootstrapPanel.Title>

          <If condition={notification}>
            {notification}
          </If>

          <Icon className="icon-toggle" size="lg" {...rotateProps} name={toggleIconName} />
        </BootstrapPanel.Toggle>
      </BootstrapPanel.Heading>

      <BootstrapPanel.Body collapsible>{children}</BootstrapPanel.Body>
    </BootstrapPanel>
  )
}

Panel.defaultProps = {
  collapsed: true,
  title: "",
  toggleIconName: "chevron-up"
}

export default class PanelGroup extends React.Component<PanelGroupProps> {
  static Panel = Panel

  static defaultProps = {
    id: `${Math.random()}`,
    inner: false,
  }

  state = {
    activePanel: this.props.activePanel,
  }

  handleSelect = (activePanel) => {
    this.setState({ activePanel });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePanel !== this.props.activePanel) {
      this.setState({ activePanel: nextProps.activePanel })
    }
  }

  render() {
    const { children, id, inner, className } = this.props
    const toggleIconName = inner ? "angle-up" : "chevron-down "
    const panels = React.Children.map(children, (child, i) => {
      const panelName = child.props.name || `${i}`
      const collapsed = this.state.activePanel !== panelName
      return React.cloneElement(child, { name: panelName, collapsed, toggleIconName })
    })

    return (
      <BootstrapPanelGroup id={id} accordion
        activeKey={this.state.activePanel}
        className={`nitro-panel-group ${className} ${inner ? "inner-panel-group": ""}`}
        onSelect={this.handleSelect}
      >
        {panels}
      </BootstrapPanelGroup>
    );
  }
}
