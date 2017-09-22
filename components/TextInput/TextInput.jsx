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
              className={classnames(css)}
              disabled={disabled}
              placeholder={placeholder}
              value={defaultValue}
          />
        </When>
        <When condition={kind == 'select'}>
          <select
              className={classnames(css)}
              disabled={disabled}
          />
        </When>
        <When condition={kind == 'textarea'}>
          <textarea
              className={classnames(css)}
              disabled={disabled}
          >
            {children}
          </textarea>
        </When>
      </Choose>
    )
  }
}
