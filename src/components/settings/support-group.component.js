import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WoneInnerMain } from '../common';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { getDepartment } from '../../redux/fetch-department/fetch-department.action';
import { cleanupPostSupportError } from '../../redux/post-support-group/post-support-group.action';
import { supportGroupRequest } from '../../redux/post-support-group/post-support-group.action';
import './support-group.styles.scss';

// component 
import  SelectDepartmentName from './select-department-name';
import SupportDropdown from '../common/support-dropdown';


const LoginSchema = Yup.object().shape({
    support_name: Yup.string()
        .required('please provide support name'),
    department_name: Yup.string()
        .required('please provide department name'),
    support_channel: Yup.string()
        .required('please provide support channel')
})

const SupportGroup = () => {
    const dispatch = useDispatch();
    const DepartmentState = useSelector(state => state.fetchDepartment.department)
    const SupportGroupState = useSelector(state => state.supportGroup.support_group)

    useEffect(() => {
        dispatch(getDepartment());
    }, []);

        return(
        <Formik 
            initialValues={{
              support_name: '',
              department_name: '',
              support_channel: '',
            }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try{
                      const payload = {
                          support_name: values.support_name,
                          department_name: values.department_name.value,
                          support_channel: values.support_channel.label
                      }
                      await dispatch(supportGroupRequest(payload));
                      resetForm({})
                  } catch (error) {
                      setSubmitting(false);
                  }
              }}
              validationSchema={LoginSchema}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                isSubmitting,
                setFieldValue,
                setFieldTouched,
                errors,
                isValid,
                setErrors,
                handleBlur,
                touched
              }) => (
                <>
            <WoneInnerMain>
                <form onSubmit={handleSubmit}>
                    <article>
                        <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                        <span className="page-title">Create Support Group</span>
                        </div>
                    </article>
                    <article>
                        <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <label htmlFor="support-name">Support name</label>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="form-control" 
                                    name="support_name"
                                    onChange={handleChange('support_name')}
                                    value={values.support_name} 
                                    onBlur={handleBlur('support_name')}
                                    onFocus={() => {
                                        setErrors({});
                                        dispatch(cleanupPostSupportError())
                                      }}
                                    />
                                {errors.support_name && touched.support_name ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.support_name}</p> : null }
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <label htmlFor="department_name">Department</label>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <div className="form-group">
                                <SelectDepartmentName 
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    placeholder=""
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    value={values.department_name}
                                    touched={touched.department_name}
                                    error={errors.department_name}
                                    options={DepartmentState && DepartmentState}
                                />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <label htmlFor="agent-name">Support Channel</label>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <div className="form-group">  
                                <SupportDropdown 
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    placeholder=""
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    value={values.support_channel}
                                    touched={touched.support_channel}
                                    error={errors.support_channel}
                                    options={SupportGroupState && SupportGroupState}
                                />
                            </div>
                        </div>
                        </div>
                    </article>
                    <article className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 btn-pad">
                        <button 
                            type="submit" 
                            className="btn agent-btn tab-btn"
                            disabled={isSubmitting || !isValid}>
                                Create Support Group
                        </button>
                        {/* <button className="btn agent-btn white-btn" 
                            id="close-form" 
                            // onClick={this.props.close}
                            >
                                Cancel
                        </button> */}
                        </div>
                    </article>
                </form>
            </WoneInnerMain>
             </>
            )}
        </Formik>
        )
}

export default SupportGroup;