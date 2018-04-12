import React from "react"
import FontAwesome from 'react-fontawesome'

import {
  Panel as BootstrapPanel,
  PanelGroup as BootstrapPanelGroup
} from "react-bootstrap"

import Text from '../Text/Text'

import styles from "./PanelGroup.scss"

type PanelProps = {
  children?: string,
  collapsed?: boolean,
  icon?: string,
  name?: string,
  title?: string,
}

type PanelGroupProps = {
  id?: string,
  activePanelName?: string,
}

const Panel = ({ children, collapsed, icon, name, title, notification }: PanelProps) => {
  const rotateProps = collapsed ? { rotate: 180 } : {}
  const panelColapsed = collapsed ? "panel-collapsed" : ""

  return (
    <BootstrapPanel eventKey={name} className={panelColapsed}>
      <BootstrapPanel.Heading bsStyle="default">
        <BootstrapPanel.Toggle className="panel-toggle">
          <BootstrapPanel.Title>
            <FontAwesome className="icon-title" name={icon} />
            <Text className="title" bold>{title}</Text>
          </BootstrapPanel.Title>

          {notification}

          <FontAwesome className="icon-toggle" size="lg" {...rotateProps} name="angle-up" />
        </BootstrapPanel.Toggle>
      </BootstrapPanel.Heading>

      <BootstrapPanel.Body collapsible>{children}</BootstrapPanel.Body>
    </BootstrapPanel>
  )
}

Panel.defaultProps = {
  collapsed: true,
  title: "",
}

export default class PanelGroup extends React.Component<PanelGroupProps> {
  static Panel = Panel

  static defaultProps = {
    id: `${Math.random()}`,
  }

  state = {
    activePanelName: this.props.activePanelName,
  }

  handleSelect = (activePanelName) => {
    this.setState({ activePanelName });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ activePanelName: nextProps.activePanelName })
  }

  render() {
    const panels = React.Children.map(this.props.children, (child, i) => {
      const name = child.props.name || `${i}`
      const collapsed = this.state.activePanelName !== name
      return React.cloneElement(child, { name, collapsed })
    })

    return (
      <BootstrapPanelGroup id={this.props.id} accordion
        activeKey={this.state.activePanelName}
        className="nitro-panel-group"
        onSelect={this.handleSelect}
      >
        {panels}
      </BootstrapPanelGroup>
    );
  }
}