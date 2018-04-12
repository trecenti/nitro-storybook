import React from "react"
import FontAwesome from 'react-fontawesome'
import { boolean, text, select } from "@storybook/addon-knobs"

import Text from "../Text/Text"
import PanelGroup from "./PanelGroup"

function ValidationComplete() {
  return (
    <span style={{ color: "rgb(19, 171, 19)" }}>
      {'Complete '}
      <FontAwesome name="check-circle" />
    </span>
  )
}

function ValidationIncomplete() {
  return (
    <span style={{ color: "#ff0000" }}>
      {'Incomplete '}
      <FontAwesome name="exclamation-circle" />
    </span>
  )
}

export default function PanelGroupStory(stories) {
  stories.add("PanelGroup", () => {
    const selectedPanel = "Second Panel"
    const options = {
      ["First Panel"]: "First Panel",
      ["Second Panel"]: "Second Panel",
      ["Third Panel"]: "Third Panel",
      ["4th Panel"]: "4th Panel",
    }

    const props = {
      activePanelName: select("Active Panel", options, selectedPanel, "active-panel")
    }

    return (
      <PanelGroup {...props}>
        <PanelGroup.Panel icon="user" name="First Panel" title="My first section" notification="Text Notification">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="phone" name="Second Panel" title="My second section" notification={ValidationIncomplete()}>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="home" name="Third Panel" title="My third section" notification={ValidationComplete()}>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel name="4th Panel">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>
      </PanelGroup>
    )
  })
}
