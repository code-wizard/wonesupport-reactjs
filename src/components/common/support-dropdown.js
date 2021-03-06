import React, { Component } from 'react';
import Select from 'react-select';


class SupportDropdown extends Component {

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('support_channel', value);
      };
    
      handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('support_channel', true);
      };

    render() {
        return(
            <div>
                <Select
                    id="color"
                    options={this.props.options}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    className={this.props.className}
                    classNamePrefix={this.props.classNamePrefix}
                    placeholder={this.props.placeholder}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
                )}
            </div>
        )
    }
}

export default SupportDropdown;