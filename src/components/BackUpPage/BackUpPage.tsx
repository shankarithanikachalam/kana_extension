import React, { useState } from 'react';
import './BackUpPage.css';
import BACK_ARROW from "../../assets/images/back_arrow.png";
import CLIPBOARD from '../../assets/images/clipboard.png';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import PasswordPage from '../PasswordPage/PasswordPage';
import UserNamePage from '../UserNamePage/UserNamePage';
import PROGRESS60 from '../../assets/images/60%.png';
function BackUpPage() {
  function toggePassword_backup() {
    let password_entry: any = document.getElementById('password_entry_backup');
    let togglePassword: any = document.getElementById('togglePassword_backup');
    if (password_entry.type == "password") {
      password_entry.type = "text";
      togglePassword.className = "fa fa-eye"
    } else {
      password_entry.type = "password";
      togglePassword.className = "fa fa-eye-slash"
    }
  }
  const [input, setInput] = useState({
    password: ''
  });
  const [error, setError] = useState({
    password: ''
  });
  const onInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  }
  return (
    <div className="BackUpPage">
      <div className='BackUpPage_title'>
        <Link component={UserNamePage} >
          <img className='kanalabs_logo' src={BACK_ARROW} alt="logo" />
        </Link>
        <div className='Title'>Backup your wallet</div>
      </div>
      <img className='Progress_BackUpPage' src={PROGRESS60} alt="60%" />
      <div className='Description1'>Save this 12 word secret recovery phrase
        to a password manager, or write down and
        store in a secure place.</div>
      <div className='Description2'>
        This phrase is the ONLY way to recover your wallet.  Do NOT share it with anyone!
      </div>

      <form className='BackUpPage_form'>
        <div className='password_row'>
          <input
            type="password"
            className='phrase'
            name="Password"
            id="password_entry_backup"
            onChange={onInputChange}>
          </input>
          <i className="fa fa-eye-slash backup_eye" id="togglePassword_backup" onClick={toggePassword_backup}></i>
        </div>
        <div className='copy_to_clipboard'>
          <img className='clipboard' src={CLIPBOARD} alt="clipboard" />
          <div className='clipboard_stmt'> Copy to clipboard </div>
        </div>
        <div className='checkbox'>
          <input className='checkbox_box' id='checkbox' name='checkbox' type="checkbox" />
          <label className='checkbox_label' htmlFor='checkbox'>I saved my recovery phrase</label>
        </div>
        <Link className='Continue_Backup' type='submit' component={PasswordPage} >Continue</Link>
      </form >
    </div >
  );
}
export default BackUpPage;
