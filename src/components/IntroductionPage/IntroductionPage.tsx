import React from 'react';
import './IntroductionPage.css';
import logo from "../../assets/images/logo.png";
import UserNamePage from '../UserNamePage/UserNamePage';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import SecretPhrasePage from '../SecretPhrasePage/SecretPhrasePage';
function IntroductionPage() {
  return (
    <div className="IntroductionPage">
      <div className="switch">
        <input id="switch-1" type="checkbox" className="switch-input" />
        <label htmlFor="switch-1" className="switch-label"></label>
      </div>
      <img className='kanalabs_logo' src={logo} alt="logo" />
      <div className='kanalabs_brief'>To get started, create a new wallet or use one you already have</div>
      <Link component={UserNamePage} className='new_wallet'  >Create new wallet</Link>
      <Link component={SecretPhrasePage} className='existing_wallet' >I already have a wallet</Link>
    </div>
  );
}

export default IntroductionPage;
//onClick={UserNamePage}
//<Link to="usernamepage" className='existing_wallet'>I already have a wallet</Link>
//<button className='existing_wallet' onClick={navigateHome}><Link to="usernamepage">I already have a wallet</Link></button>

