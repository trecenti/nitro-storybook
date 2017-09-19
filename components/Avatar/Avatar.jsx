/* @flow */

import React from 'react'
import classnames from 'classnames/bind'

import {OverlayTrigger, Popover} from 'react-bootstrap'

import styles from './styles.scss'

export type Props = {
  alt: string,
  disableLink: boolean,
  thumb: string,
  url: string,
  size: "smaller" | "small" | "base" | "large" | "larger"
}

/**
 * Avatar renders a user avatar thumbnail image. Upon click, it opens the orinal
 * image on a new tab.
 *
 * @param {string} alt the text to display when hovering over the image.
 * @param {string} thumb the avatar thumbnail image URL.
 * @param {string} url the avatar original image URL.
 * @returns {ReactElement} JSX.
 */
const Avatar = ({
  alt,
  disableLink,
  thumb,
  url,
  size,
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

  return (
    <OverlayTrigger
        overlay={popover}
        placement="right"
        trigger={['hover']}
    >
      <a href={disableLink ? "javascript:void(0)" : url}
          style={{maxHeight: 56}}
          target="_blank"
      >
        <img alt={alt}
            className={classnames(imgCSS, styles[`avatar-${size}-thumb`])}
            src={thumb}
        />
      </a>
    </OverlayTrigger>
  )
}

Avatar.defaultProps = {
  alt: 'Avatar Image',
  size: 'larger',
}

export default Avatar
