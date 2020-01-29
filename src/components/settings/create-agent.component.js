import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agentRequest, cleanupPostAgentError } from '../../redux/post-agent/post-agent.action';
import { getDepartment } from '../../redux/fetch-department/fetch-department.action';
import Select from 'react-select';
import { Formik } from 'formik'
import * as Yup from 'yup';
import './agents.styles.scss';

// components 
import SelectDepartment from './select-department';
import SelectSupport from './multi-select-support-group'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('please provide a valid email')
        .required('email cannot be empty'),
    name: Yup.string()
        .min(2, 'name is too short')
        .max(50, 'name is too long')
        .required('please provide name'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('please provide phone number'),
    password1: Yup.string()
        .min(8, 'password must be atleast 8 characters')
        .required('please provide password'),
    short_description: Yup.string()
        .required('please provide description'),
    role: Yup.string()
        .required('please provide role'),
    department: Yup.string()
        .required('please provide department'),
    support_group_id: Yup.string()
        .required('please provide support group')
})  

const CreateAgent = ({ close }) => {
    const dispatch = useDispatch();
    // const agentState = useSelector(state => state.agent)
    const servererror = useSelector(state => state.agent.error)
    const DepartmentState = useSelector(state => state.fetchDepartment.department)
    const SupportGroupState = useSelector(state => state.supportGroup.support_group)
    console.log(servererror && servererror, 'uchenna ibe')  

    useEffect(() => {
        dispatch(getDepartment());
      }, []);

        return(
            // Create Department
        <Formik 
          initialValues={{
            email: '',
            name: '',
            phone: '',
            password1: '',
            short_description: '',
            role: '',
            department: '',
            support_group_id: '',
          }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try{
                    const payload = {
                        email: values.email,
                        name: values.name,
                        phone: values.phone,
                        password1: values.password1,
                        short_description: values.short_description,
                        role: values.role,
                        department: values.department.value,
                        support_group_id: values.support_group_id.value
                    }
                    await dispatch(agentRequest(payload));
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
                <article>
                    <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                    <span className="page-title">Add Agent</span>
                    </div>
                </article>
                <form onSubmit={handleSubmit}>
                <article>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-email">Email</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <input 
                            type="email" 
                            id="agent-email" 
                            className="form-control"
                            name="email"
                            onChange={handleChange('email')}
                            value={values.email} 
                            onBlur={handleBlur('email')}
                            onFocus={() => {
                                setErrors({});
                                dispatch(cleanupPostAgentError())
                              }}
                            />
                            { errors.email && touched.email ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.email}</p> : null }
                            {servererror != null ? (<p style={{ color: 'red', marginTop: '.5rem' }}>{servererror}</p>) : null}
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-name">Name</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="agent-name" 
                                className="form-control"
                                name="name"
                                onChange={handleChange('name')}
                                value={values.name} 
                                onBlur={handleBlur('name')}
                            />
                            { errors.name && touched.name ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.name}</p> : null }
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-phone">Phone</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <input 
                            type="text" 
                            id="agent-phone" 
                            className="form-control" 
                            name="phone"
                            onChange={handleChange('phone')}
                            value={values.phone} 
                            onBlur={handleBlur('phone')}
                        />
                        { errors.phone && touched.phone ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.phone}</p> : null }
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-password">Password</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <input 
                            type="password" 
                            id="agent-password" 
                            className="form-control"
                            name="password1"
                            onChange={handleChange('password1')}
                            value={values.password1} 
                            onBlur={handleBlur('password1')}
                             />
                        { errors.password1 && touched.password1 ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.password1}</p> : null }
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-description">Short description</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <input 
                            type="text" 
                            id="agent-description"  
                            className="form-control"
                            name="short_description"
                            onChange={handleChange('short_description')}
                            value={values.short_description} 
                            onBlur={handleBlur('short_description')}
                        />
                        { errors.short_description && touched.short_description ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.short_description}</p> : null }
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <label htmlFor="agent-name">Department</label>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <div className="form-group">
                                <SelectDepartment 
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    options={DepartmentState && DepartmentState}
                                    // placeholder="Department"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    value={values.department}
                                    touched={touched.department}
                                    error={errors.department}
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
                                <SelectSupport 
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    // placeholder="Support Channel"
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    value={values.support_group_id}
                                    touched={touched.support_group_id}
                                    error={errors.support_group_id}
                                    options={SupportGroupState && SupportGroupState}
                                />
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <label htmlFor="agent-name">Role</label>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="form-group">
                        <select className="form-control"
                            name="role"
                            value={values.role} 
                            onChange={handleChange('role')}
                            onBlur={handleBlur('role')}>
                            {/* <option value="" label="Select role"></option> */}
                            <option value="agent">Agent</option>
                        </select>
                        { errors.role && touched.role ? <p style={{ color: 'red', marginTop: '.5rem' }}>{errors.role}</p> : null }
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
                        Add Agent
                    </button>
                    <button className="btn agent-btn white-btn" 
                        id="close-form" 
                        onClick={close}>
                            Cancel
                    </button>
                    </div>
                </article>
                </form>
            </>
            )}
          </Formik>
        )
}

export default CreateAgent;