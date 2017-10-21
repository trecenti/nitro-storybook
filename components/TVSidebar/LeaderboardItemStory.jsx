import React from "react"
import TVSidebar from "./TVSidebar"
import TVBackground from "../TVSidebar/TVBackground"
import LeaderboardItem from '../TVSidebar/LeaderboardItem'

import { boolean, text } from "@storybook/addon-knobs"

export default function LeaderboardItemStory(stories) {
  stories.add("Leaderboard Item",
    () => {
      let props = {
        animate: boolean("animate", true),
        active: boolean("active", false),
        title: text("title", "Timothy Wenhold, PA"),
        leftText: text("leftText", "DPI $94,023"),
        rightText: text("rightText", "78.9%"),
        wait: text("wait", "120")
      }
      return (
        <TVSidebar {...props}>
          <TVBackground className="p-5">
            <LeaderboardItem {...props}/>
          </TVBackground>
        </TVSidebar>
      )
    }
  )
}
