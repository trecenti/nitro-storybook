/* @flow */

import React from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

type Props = {
  children?: Array<React.Node>,
  kind: "input" | "select" | "textarea",
  className: string,
}

export default class TextInput extends React.Component<Props> {
  static defaultProps = {
    children: "",
    className: "",
    disabled: false,
    defaultValue: "",
    placeholder: "email@example.com",
    kind: "input",
    textType: "text",
  }
  props: Props
  render() {
    const {
      className,
      children,
      state,
      placeholder,
      textType,
      kind,
      defaultValue,
      disabled,
      success,
      error,
      style,
    } = this.props
    const css = [
      className,
      styles["form-control"],
    ]
    const inputProps = {


      // className: inputClassName,
      // onFocus: this.handleFocus,
      // onBlur: this.handleBlur,
      // select
      // textarea
      // input
    };
    return (
      <Choose>
        <When condition={kind == 'input'}>
          <input
            placeholder={placeholder}
            value={defaultValue}
            disabled={disabled}
            className={classnames(css)}
          />
        </When>
        <When condition={kind == 'select'}>
          <select
            disabled={disabled}
            className={classnames(css)}
          >
          </select>
        </When>
        <When condition={kind == 'textarea'}>
          <textarea
            disabled={disabled}
            className={classnames(css)}
          >
            {children}
          </textarea>
        </When>
      </Choose>
    )
  }
}
