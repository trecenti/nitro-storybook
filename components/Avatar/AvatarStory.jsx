import React from "react"
import Avatar from './Avatar'

import { text, select } from '@storybook/addon-knobs'

export default function BadgeStory(stories) {
  stories.add(
    'Avatar',
    () => {
      // const color = select('Colors', ['default', 'primary', 'success', 'info', 'warning', 'danger'], '');
      // const className = text('className', null);
      const props = {}
      props.url = "https://i.giphy.com/l46CjoMYO5n2hQnWE.gif"
      props.thumb = props.url
      // if (color) props.color = color
      // if (className) props.className = className;
      return (<Avatar {...props}/>)
    },
    { inline: true }
  )
}