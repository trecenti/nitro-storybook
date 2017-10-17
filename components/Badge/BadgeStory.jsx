import React from "react"
import Badge from "./Badge"

import { text, select, boolean } from "@storybook/addon-knobs"

export default function BadgeStory(stories) {
  stories.add("Badge",
    () => {
      let props = {
        style: select("style", ["primary", "default", "success", "danger", "warning", "info", "inverse"], "primary"),
        pill: boolean("Pill", false),
        helperText: text("Helper Text", ""),
      }
      return (
        <div>
          <div className="row">
            <div className="col-sm-1">
              <Badge {...props}>Primary</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="default">Default</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="success">Success</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="danger">Danger</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="warning">Warning</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="info">Info</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="inverse">Inverse</Badge>
            </div>
          </div>

          <div className="row mt-5">
            <h2>Pills</h2>
            <div className="col-sm-1">
              <Badge style="primary" pill>Primary</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="default" pill>Default</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="success" pill>Success</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="danger" pill>Danger</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="warning" pill>Warning</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="info" pill>Info</Badge>
            </div>
            <div className="col-sm-1">
              <Badge style="inverse" pill>Inverse</Badge>
            </div>
          </div>


          <div className="row mt-5">
            <h2>Text Helpers</h2>
            <div className="col-sm-2">
              <Badge style="default" pill helperText="Appt Status">Issued</Badge>
              <Badge className="ml-3" style="default" pill helperText="Appt Range">SEP 1 2017 - DEC 31 2017</Badge>
            </div>
          </div>

        </div>
      )
    }
  )
}
