import React from "react"
import AnimatedContainer from "./AnimatedContainer"
import Avatar from '../Avatar/Avatar'
import TVSidebar from '../TVSidebar/TVSidebar'
import TVBackground from '../TVSidebar/TVBackground'

import { boolean, select, array } from "@storybook/addon-knobs"

export default function AnimatedContainerStory(stories) {
  stories.add("Animated Container",
    () => {
      let props = {
        animate: boolean("animate", false),
        speed: select("speed", ["fastest", "faster", "fast", "base", "slow", "slower", "slowest", "slug"], "fast"),
        timing: select("timing", ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"], "ease"),
        position: select("position", ["left", "right", "top", "bottom"], "left"),
        levels: array("levels", ['blank', 'power-royal', 'power-navy', 'black']),
        feedback: boolean("feedback", false),
        border: boolean("border", false),
        type: select("type", ["flip", "slide"], "flip"),
      }
      const inlineCSS = {
        width: '65px',
        height: '65px'
      }
      return (
        <TVSidebar>
          <TVBackground className="p-5">
            <div style={inlineCSS}>
              <AnimatedContainer {...props}>
                <Avatar
                    disableLink={false}
                    showPopover
                    size="base"
                    thumb="https://i.giphy.com/l46CjoMYO5n2hQnWE.gif"
                    url="https://i.giphy.com/l46CjoMYO5n2hQnWE.gif"
                />
              </AnimatedContainer>
            </div>
          </TVBackground>
        </TVSidebar>
      )
    }
  )
}
