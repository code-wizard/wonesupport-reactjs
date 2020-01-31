import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSupportGroup } from '../../redux/support-group/support-group.action';
import Select from 'react-select';

class SelectDepartmentName extends Component {
    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange('department_name', value);
      this.props.onGetSupportGroup(value.value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur('department_name', true);
    };
  
    render() {
      return (
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
      );
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onGetSupportGroup: data => {
            dispatch(getSupportGroup(data));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
    )(SelectDepartmentName);