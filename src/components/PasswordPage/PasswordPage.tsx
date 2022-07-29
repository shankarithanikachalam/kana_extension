import React, { useState, useRef } from 'react'
import './PasswordPage.css';
import BACK_ARROW from "../../assets/images/back_arrow.png";
import {
  Link,
} from 'react-chrome-extension-router';
import FinalPage from '../FinalPage/FinalPage';
import BackUpPage from '../BackUpPage/BackUpPage';
import PROGRESS80 from '../../assets/images/80%.png';
import PasswordStrengthBar from 'react-password-strength-bar';

function PasswordPage() {
  function toggePassword1() {
    let password_entry: any = document.getElementById('password_entry1');
    let togglePassword: any = document.getElementById('togglePassword1');
    if (password_entry.type == "password") {
      password_entry.type = "text";
      togglePassword.className = "fa fa-eye-slash"
    } else {
      password_entry.type = "password";
      togglePassword.className = "fa fa-eye"
    }
  }
  function toggePassword2() {
    let password_entry: any = document.getElementById('password_entry2');
    let togglePassword: any = document.getElementById('togglePassword2');
    if (password_entry.type == "password") {
      password_entry.type = "text";
      togglePassword.className = "fa fa-eye-slash"
    } else {
      password_entry.type = "password";
      togglePassword.className = "fa fa-eye"
    }
  }
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  });
  const onInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
  const validateInput = (e: { target: { name: any; value: any; }; }) => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "8 characters with one numerical at least";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password doesn’t match";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password doesn’t match";
          }
          else {
            stateObj[name] = "Password matched";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <div className="PasswordPage">
      <div className='PasswordPage_title'>
        <Link component={BackUpPage}>
          <img className='kanalabs_logo' src={BACK_ARROW} alt="logo" />
        </Link>
        <div className='PasswordPageTitle'>Create Password</div>
      </div>
      <img className='Progress_PasswordPage' src={PROGRESS80} alt="80%" />
      <div className='Password'>Set a password to unlock your wallet</div>
      <form className='PasswordPage_form' method='post'>
        <label className='password_label'>Password</label>
        <div className='password_row'>
          <input
            className='password_input'
            type="password"
            name="password"
            id="password_entry1"
            placeholder='Enter Password'
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}>
          </input>
          <i className="fa fa-eye password_eye" id="togglePassword1" onClick={toggePassword1}></i>
        </div>
        {error.password && <span className='err1'>{error.password}</span>}
        <PasswordStrengthBar password={input.password} />
        <label className='password_label'>Verify Password</label>
        <div className='password_row'>
          <input
            type="password"
            className='password_input'
            name="confirmPassword"
            id="password_entry2"
            placeholder='Enter Confirm Password'
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}>
          </input>
          <i className="fa fa-eye password_eye" id="togglePassword2" onClick={toggePassword2}></i>
        </div>
        {error.confirmPassword && <span className='err2' >{error.confirmPassword}</span>}
        <div className='checkbox_password'>
          <input className='checkbox_box_password' id='checkbox' name='checkbox' type="checkbox" />
          <label className='checkbox_label' htmlFor='checkbox'><span>I agree to <a className='checkbox_links'>terms</a> and <a className='checkbox_links'>privacy policy</a></span></label>
        </div>
        <Link className='Continue' component={FinalPage} type='submit' >Get started</Link>
      </form>
    </div>
  );
}
export default PasswordPage;


//ref={pass}