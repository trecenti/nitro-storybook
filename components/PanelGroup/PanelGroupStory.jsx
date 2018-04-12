import React from "react"
import PanelGroup from "./PanelGroup"
import Text from "../Text/Text"

import { boolean, text } from "@storybook/addon-knobs"

export default function PanelGroupStory(stories) {
  stories.add("PanelGroup", () => {
    return (
      <PanelGroup activePanelName="Second Panel">
        <PanelGroup.Panel icon="user" name="First Panel" title="My first section">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="phone" name="Second Panel" title="My second section">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon="home" name="Third Panel" title="My third section">
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>

        <PanelGroup.Panel>
          <Text>Now you see me!</Text>
        </PanelGroup.Panel>
      </PanelGroup>
    )
  })
}
