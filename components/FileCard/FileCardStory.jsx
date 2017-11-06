import React from "react"

import FileCard from "./FileCard"
import Button from "../Button/Button"

import { boolean, text, select } from "@storybook/addon-knobs"

export default function FileCardStory(stories) {
  stories.add("File Card",
    () => {
      let props = {
        className: text("className", ""),
        layout: select("layout", ["vertical", "horizontal"], "vertical"),
        displayName: text('displayName', 'Resume'),
        description: text('description', 'Aug. 16, 2017'),
        downloadUrl: text('downloadUrl', 'http://google.com'),
        openNewTab: boolean('openNewTab', false),
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
            <div className="col-sm-3">
              <FileCard {...props}>
                <Button
                    className="mt-2 btn-sm btn-power-royal"
                    text="Download"
                    type="button"
                />
              </FileCard>
            </div>
          </div>
        </div>
      )
    }
  )
}
