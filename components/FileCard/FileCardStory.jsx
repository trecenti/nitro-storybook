import React from "react"

import FileCard from "./FileCard"
import Text from "../Text/Text"
import Button from "../Button/Button"

import { text, select } from "@storybook/addon-knobs"

export default function FileCardStory(stories) {
  stories.add("File Card",
    () => {
      let props = {
        className: text("className", ""),
        layout: select("layout", ["vertical", "horizontal"], "vertical"),
        type: select(
          "type",
          [
            "file-excel",
            "file-pdf",
            "file-word",
            "file-image",
            "file-powerpoint",
            "file-video",
            "file-text",
            "file-zip",
            "file-code",
            "file-sound",
            "file",
          ],
          "file"
        )
      }
      return (
        <div className="container">
          <div className="row my-4">
            <div className="col-sm-4">
              <FileCard {...props}>
                <h5 className="m-0">
                  <Text bold="true">
                    {`Resume`}
                  </Text>
                </h5>
                <p className="m-0">
                  <Text>
                    {`Aug. 19 2017`}
                  </Text>
                </p>
                <p className="m-0">
                  <Button className="mt-2 btn-sm btn-power-royal" text="Download" type="button" />
                </p>
              </FileCard>
            </div>
          </div>
        </div>
      )
    }
  )
}
