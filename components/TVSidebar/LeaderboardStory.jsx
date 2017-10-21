import React from "react"
import TVSidebar from "./TVSidebar"
import TVBackground from "../TVSidebar/TVBackground"
import Leaderboard from '../TVSidebar/Leaderboard'

import { boolean } from "@storybook/addon-knobs"

export default function LeaderboardStory(stories) {
  stories.add("Leaderboard",
    () => {
      let props = {
        animate: boolean("animate", true),
        list: [
          {"title" : "Timothy Wenhold, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Eric Lewis, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Jason Cypret, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Jeremy Bower, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Michelle Bower, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Bryan Reed, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Stephen Marshall, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Ramon Ruiz, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Jill Tankersley, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
          {"title" : "Wade Winningham, PA", "leftText" : "DPI $94,028", "rightText" : "78.9%"},
        ]
      }
      return (
        <TVSidebar {...props}>
          <TVBackground className="p-5">
            <Leaderboard {...props}/>
          </TVBackground>
        </TVSidebar>
      )
    }
  )
}
