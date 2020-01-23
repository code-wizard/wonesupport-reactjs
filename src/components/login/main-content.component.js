import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, cleanupLoginError } from '../../redux/login/login.action';

import { Formik } from 'formik'
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './main-content.styles.scss';



const LoginSchema = Yup.object().shape({
  phoneEmail: Yup.string()
    .email('please provide a valid email')
    .required('email cannot be empty'),
  password: Yup.string()
    .min(8, 'password must be atleast 8 characters')
    .required('please provide your password')
})

const MainContent = ({ history }) => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login)
    const servererror = useSelector(state => state.login.error)
    // console.log(loginState && loginState, 'uchenna')

    useEffect(() => {
      if (loginState.isSuccessful) {
        dispatch(cleanupLoginError());
          history.push({ pathname: '/app' });
      }
  
    }, [loginState]);


    const [changeText, setChangeText] = useState('password');
    const [changeIconEye, setChangeIcon] = useState(true);

    const toggleVisibility = () => {
      setChangeIcon(!changeIconEye);
      setChangeText(changeIconEye ? 'text' : 'password');
    }
    
      return(
        <Formik 
          initialValues={{
            phoneEmail: '',
            password: ''
          }}
            onSubmit={async (values, { setSubmitting }) => {
              const payload = {
                email: values.phoneEmail,
                password: values.password
               }

              await dispatch(loginRequest(payload));
              setSubmitting(false);
            }}
            validationSchema={LoginSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              isSubmitting,
              errors,
              isValid,
              setErrors,
              handleBlur,
              touched
            }) => (
            <>
            <div className="wonesupport-land-main">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-lg-6 form-phase">
                    <div className="form-content">
                      <div className="header-content">
                        <h3>Hello there!</h3>
                        <p>Welcome to WoneSupport, Please Sign Up to enjoy all our great features</p>
                      </div>
                      <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="phoneEmail"
                              placeholder="PhoneNumber / Email" 
                              value={values.phoneEmail}
                              onChange={handleChange('phoneEmail')}
                              onBlur={handleBlur('phoneEmail')}
                              onFocus={() => {
                                setErrors({});
                                dispatch(cleanupLoginError());
                              }}
                              />
                          </div>
                          { errors.phoneEmail && touched.phoneEmail ? <p style={{ color: 'red'}}>{errors.phoneEmail}</p> : null }
                          <div className="form-group">
                            <input
                              id="myInput"
                              type={changeText}
                              name="password"
                              className="form-control"
                              placeholder="Password" 
                              value={values.password}
                              onChange={handleChange('password')}
                              onBlur={handleBlur('password')}
                              />
                              <span className="eye-view">
                                <FontAwesomeIcon icon={changeIconEye ? faEyeSlash : faEye} onClick={() => toggleVisibility()} />
                              </span>
                          </div>
                          { errors.password && touched.password ? <p style={{ color: 'red'}}>{errors.password}</p> : null }
                          {servererror && (<p style={{ color: 'red'}}>{servererror}</p>)}
                          <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            <Link to="#" className="float-right">Forget password?</Link>
                          </div>
                          <div className="form-group">
                            <button 
                              type="submit"
                              className="btn btn-primary btn-block login-btn log-btn"
                              disabled={isSubmitting || !isValid}
                            >
                              Sign in
                            </button>
                          </div>
                        </form>
                        <div className="row custom-pad">
                          <div className="divider-line"><span>Or</span></div>
                        </div>
                        <div className="row custom-pad">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button className="social-btn">
                              <span>
                                <FontAwesomeIcon icon={faFacebookF} />
                                {/* <!-- <i class="facebook-icon"></i> --> */}
                              </span>
        
                              Login with facebook
                            </button>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
        
                            <button className="social-btn">
                              <span>
                                {/* <!-- <i class="google-icon"></i> --> */}
                                <FontAwesomeIcon icon={faGoogle} />
                              </span>
                              Login with Google
                            </button>
                          </div>
                        </div>
                        <div className="row custom-pad">
                          <p>Don't have an account? <Link to="#">Sign Up here</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6 globe-phase">
                    <div className="globe-map">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
            )}
          </Formik>
      )
    }

export default withRouter(MainContent);