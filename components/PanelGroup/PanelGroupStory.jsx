import React from "react"
import FontAwesome from 'react-fontawesome'
import { boolean, text } from "@storybook/addon-knobs"

import Text from "../Text/Text"
import PanelGroup from "./PanelGroup"

const renderValidationComplete = () => (
  <span style={{ color: "rgb(19, 171, 19)" }}>
    {'Complete '}
    <FontAwesome name="check-circle" />
  </span>
)

const renderValidationIncomplete = () => (
  <span style={{ color: "#ff0000" }}>
    {'Incomplete '}
    <FontAwesome name="exclamation-circle" />
  </span>
)

export default function PanelGroupStory(stories) {
  stories.add("PanelGroup", () => {
    return (
      <PanelGroup activePanelName="Second Panel">
        <PanelGroup.Panel icon="user" name="First Panel" title="My first section" notification="Text Notification">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="phone" name="Second Panel" title="My second section" notification={renderValidationIncomplete()}>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="home" name="Third Panel" title="My third section" notification={renderValidationComplete()}>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>
      </PanelGroup>
    )
  })
}
