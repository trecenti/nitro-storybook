/* @flow */

import React from 'react'

import {OverlayTrigger, Popover} from 'react-bootstrap'

export type Props = {
  alt: string,
  disableLink: boolean,
  thumb: string,
  url: string,
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
  url
} : Props) => {
  const popover = (
    <Popover id="avatar-popover">
      <img className="avatar"
          height={100}
          src={url}
          width={100}
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
            className="avatar"
            height={56}
            src={thumb}
            width={56}
        />
      </a>
    </OverlayTrigger>
  )
}

Avatar.defaultProps = {
  alt: 'Avatar Image',
}

export default Avatar
