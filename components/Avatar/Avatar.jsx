/* @flow */

import React from 'react'
import classnames from 'classnames/bind'

import {OverlayTrigger, Popover} from 'react-bootstrap'

import styles from './styles.scss'

export type Props = {
  alt: string,
  disableLink: boolean,
  showPopover: boolean,
  size: "smaller" | "small" | "base" | "large" | "larger",
  thumb: string,
  url: string,
}

/**
 * Avatar renders a user avatar thumbnail image. Upon click, it opens the orinal
 * image on a new tab.
 *
 * @param {string} alt the text to display when hovering over the image.
 * @param {bool} disableLink whether to disable the anchor link
 * @param {bool} showPopover whether to show the popover image on hover
 * @param {string} size the pre-defined avatar size.
 * @param {string} thumb the avatar thumbnail image URL.
 * @param {string} url the avatar original image URL.
 * @returns {ReactElement} JSX.
 */
const Avatar = ({
  alt,
  disableLink,
  showPopover,
  size,
  thumb,
  url,
} : Props) => {
  const imgCSS = [
    "avatar",
    styles[`avatar-${size}`],
  ]
  const popover = (
    <Popover>
      <img
          className={classnames(imgCSS)}
          src={url}
      />
    </Popover>
  )
  const imgThumb = (
    <a href={disableLink ? "javascript:void(0)" : url}
        style={{maxHeight: 56}}
        target="_blank"
    >
      <img alt={alt}
          className={classnames(imgCSS, styles[`avatar-${size}-thumb`])}
          src={thumb}
      />
    </a>
  )
  if(showPopover) {
    return (
      <OverlayTrigger
          overlay={popover}
          placement="right"
          trigger={['hover']}
      >
        {imgThumb}
      </OverlayTrigger>
    )
  } else {
    return imgThumb
  }
}

Avatar.defaultProps = {
  alt: 'Avatar Image',
  size: 'base',
  showPopover: true,
}

export default Avatar
