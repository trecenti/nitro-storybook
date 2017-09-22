import React from 'react'
import classnames from 'classnames'

import moment from 'moment'

import styles from './styles.scss'

type Props = {
  className: string,
  clock: 24 | 12,
  disabled: boolean | "disabled",
  multiGroup: boolean,
  labelInside: boolean,
  defaultValue: string | Object,
  onChange: () => mixed,
  required: boolean,
}

export default class TimePicker extends React.Component<Props> {

  static defaultProps = {
    clock: 12,
    disabled: false,
    multiGroup: true,
    labelInside: true,
    defaultValue: moment().hour(0).minute(0),
    onChange: () => {},
  }

  state = {
    hour: null,
    minute: null,
  }

  componentWillMount() {
    const {defaultValue} = this.props
    const t = moment(defaultValue)
    const hour = t.format('HH')
    const minute = t.format('mm')
    if(t.isValid()) {
      this.setState({
        hour,
        minute,
      })
      this.handleTimeChange(hour, minute)
    }
  }

  props: Props

  handleTimeChange(hour, minute) {
    this.props.onChange(`${hour || this.state.hour}:${minute || this.state.minute}`)
  }

  handleOnHourChange = (e) => {
    const hour = e.target.value
    this.setState({hour})
    this.handleTimeChange(hour)
  }

  handleOnMinutesChange = (e) => {
    const m = moment().minutes(e.target.value)
    const minute = m.format('mm')
    this.setState({minute})
    this.handleTimeChange(null, minute)
  }

  renderHoursSelect() {
    let options;
    options = [<option key="ts-hr-option-no"/>]

    for(let i = 0; i < 24; ++i) {
      const h = moment().hour(i)
      options.push(
        <option
            key={`ts-hr-option-${i}`}
            value={h.format('HH')}
        >
          <If condition={this.props.clock === 12}>
            {h.format('ha')}
          <Else/>
            {h.format('HH')}
          </If>
        </option>
      )
    }

    let props = {
      className: "form-control",
      onChange: this.handleOnHourChange,
      defaultValue: this.state.hour,
    }

    if(this.props.required) props.required = "required"
    if(this.props.disabled) props.disabled = "disabled"

    return (
      <select
          {...props}
      >
        {options}
      </select>
    )
  }

  renderMinsSelect() {
    let minutes = [<option key="ts-min-option-no"/>]
    for(let i = 0; i < 60; ++i) {
      const m = moment().minutes(i)
      const padMins = m.format('mm')
      minutes.push(
        <option
            key={`ts-min-option-${i}`}
            value={padMins}
        >
          {`:${padMins}`}
        </option>)
    }

    let props = {
      className: "form-control",
      onChange: this.handleOnMinutesChange,
      defaultValue: this.state.minute,
    }
    if(this.props.required) props.required = "required"
    if(this.props.disabled) props.disabled = "disabled"

    return (
      <select
          {...props}
      >
        {minutes}
      </select>
    )
  }

  render() {
    const {
      className,
      multiGroup,
      labelInside,
      required
    } = this.props;

    const wrapperCSS = [
      multiGroup ? "multi-input-group" : "form-group",
      className,
      styles.timePicker,
    ]

    const itemCSS = [
      "multi-input-group-item",
      "form-group",
      labelInside ? "label-inside" : null
    ]

    return (
      <div className={classnames(wrapperCSS)}>
        <If condition={multiGroup}>
          <div className="col-md-6">
            <div className={classnames(itemCSS)}>
              <label>
                <If condition={required}>{`* `}</If>
                {`Hour`}
              </label>
              {this.renderHoursSelect()}
            </div>
          </div>
          <div className="col-md-6">
            <div className={classnames(itemCSS)}>
              <label>
                <If condition={required}>{`* `}</If>
                {`Minutes`}
              </label>
              {this.renderMinsSelect()}
            </div>
          </div>
        <Else/>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                <If condition={required}>{`* `}</If>
                {`Hour`}
              </label>
              {this.renderHoursSelect()}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                <If condition={required}>{`* `}</If>
                {`Minutes`}
              </label>
              {this.renderMinsSelect()}
            </div>
          </div>
        </If>
      </div>
    )
  }
}