import React from "react"
import Tab from "../Tab/Tab"
import TabList from "./TabList"

// import FormControl from 'react-bootstrap/lib/FormControl'

// import { text, select, boolean } from "@storybook/addon-knobs"

export default function TabListStory(stories) {
  stories.add("Tabbed List",
    () => {
      // let props = {
      //   kind: select("kind", ["input", "select", "textarea"], "input"),
      // }
      return (
        <div className="container my-5">
          <TabList>
            <Tab
                active={true}
                text="Normal Tab"
            />
            <Tab
                active={false}
                text="GitHub"
                href="https://www.github.com"
            />
            <Tab
                active={false}
                onClick={function(){alert("Hey, who clicked me?!")}}
                text="Click Tab"
            />
          </TabList>
        </div>
      )
    }
  )
}
