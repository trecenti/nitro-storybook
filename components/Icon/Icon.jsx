import React from "react"
import FontAwesome from "react-fontawesome"

/**
 * Icon renders a FontAwesome icon followed by a label.
 *
 * @param {string} name FontAwesome icon's name. For the icon 'fa-paperclip' for
 * example, its name would be 'paperclip'.
 * @param {string} label the text to use as a label.
 * @param {string} size an optional FontAwesome icon size ('lg', '2x', '3x', etc).
 * @param {func} onClick the function to be called when the React onClick event is triggered.
 * @param {string} className class name is an option on the FontAwesome package that adds a class to the FontAwesome span.
 * @param {string} title an optional title as a tooltip on mouse hover.
 * @returns {ReactElement} JSX.
 */
const Icon = ({
  name,
  label,
  size,
  spin,
  onClick,
  className,
  title
}: Props) => (
  <span
      className="icon"
      onClick={onClick}
      title={title}
  >
    <FontAwesome
        className={className}
        name={name}
        size={size}
        spin={spin}
    />
    {` ${label}`}
  </span>
)

export type Props = {
  className: string,
  name: string,
  label: string,
  onClick: () => mixed,
  size: string,
  spin: boolean,
  title: string,
}

Icon.defaultProps = {
  label: "",
  spin: false,
}

export default Icon
