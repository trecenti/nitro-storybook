import React from "react"
import Tab from "../Tab/Tab"
import TabList from "./TabList"

import Wip from "../Wip/Wip"

export default function TabListStory(stories) {
  stories.add("Tabbed List",
    () => {
      return (
        <div className="container my-5">
          <Wip branch="feature/se-settings-ui" prNumber="3">
            <TabList>
              <Tab
                  active={true}
                  text="Normal Tab"
              />
              <Tab
                  active={false}
                  target="_blank"
                  text="GitHub"
                  href="https://www.github.com"
              />
              <Tab
                  active={false}
                  onClick={function(){alert("Hey, who clicked me?!")}}
                  text="Click Tab"
              />
            </TabList>
          </Wip>
        </div>
      )
    }
  )
}
