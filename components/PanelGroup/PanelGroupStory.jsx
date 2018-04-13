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

const userIcon = (
  <FontAwesome name="user" />
)

const largeUserIcon = (
  <FontAwesome name="user-circle-o" size="2x" />
)

const phoneIcon = (
  <FontAwesome name="phone" />
)

const homeIcon = (
  <FontAwesome name="home" />
)

const dollarIcon = (
  <FontAwesome name="dollar" />
)

export default function PanelGroupStory(stories) {
  stories.add("PanelGroup", () => {
    const selectedPanel = "main-applicant"
    const options = {
      ["main-applicant"]: "Main Applicant",
      ["co-applicant"]: "Co-Applicant",
    }

    const props = {
      activePanel: select("Active Panel", options, selectedPanel, "active-panel")
    }

    return (
      <PanelGroup {...props}>
        <PanelGroup.Panel icon={largeUserIcon} name="main-applicant" title="Applicant Name" subtitle="Main Applicant" toggleIconName="caret-up" notification={ValidationIncomplete()}>
          <PanelGroup inner>
            <PanelGroup.Panel icon={userIcon} name="First Panel" title="Applicataion Information" notification={ValidationIncomplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={phoneIcon} name="Second Panel" title="Contact Information" notification={ValidationIncomplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={dollarIcon} name="Third Panel" title="Income Sources" notification={ValidationComplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={homeIcon} name="4th Panel" title="Applicant Home Information" notification={ValidationComplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>
          </PanelGroup>
        </PanelGroup.Panel>

        <PanelGroup.Panel icon={largeUserIcon} name="co-applicant" title="Co-Applicant Name" subtitle="Co-Applicant" toggleIconName="caret-up" notification={ValidationIncomplete()}>
          <PanelGroup inner>
            <PanelGroup.Panel icon={userIcon} name="First Panel" title="Applicataion Information" notification={ValidationIncomplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={phoneIcon} name="Second Panel" title="Contact Information" notification={ValidationIncomplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={dollarIcon} name="Third Panel" title="Income Sources" notification={ValidationComplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>

            <PanelGroup.Panel icon={homeIcon} name="4th Panel" title="Applicant Home Information" notification={ValidationComplete()}>
              <Text>Now you see me!</Text>
            </PanelGroup.Panel>
          </PanelGroup>
        </PanelGroup.Panel>
      </PanelGroup>
    )
  })
}
