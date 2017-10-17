
import React from "react"
import Foo from "./Foo"

import { text, select, boolean } from "@storybook/addon-knobs"

export default function FooStory(stories) {
  stories.add("Foo",
    () => {
      let props = {}
      return (
        <Foo {...props}/>
      )
    }
  )
}
