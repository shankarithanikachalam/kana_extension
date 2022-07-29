import React from 'react'
import './SecretPhrasePage.css';
import BACK_ARROW from "../../assets/images/back_arrow.png";
import CLIPBOARD from '../../assets/images/clipboard.png';
import PROGRESS20 from '../../assets/images/20%.png';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
} from 'react-chrome-extension-router';
import UserNamePage from '../UserNamePage/UserNamePage'
import IntroductionPage from '../IntroductionPage/IntroductionPage';
function SecretPhrasePage() {
    return (
        <div className="SecretPhrasePage">
            <div className='SecretPhrasePage_title'>
                <Link component={IntroductionPage} >
                    <img className='kanalabs_logo' src={BACK_ARROW} alt="logo" />
                </Link>
                <div className='Title'>Enter secret phrase</div>
            </div>
            <img className='Progress_SecretPhrasePage' src={PROGRESS20} alt="20%" />
            <div className='Description1'>Enter your 12 word secret phrase below to access your wallet</div>
            <form className='SecretPhrasePage_form'>
                <div className='secretphrase'>
                    <div className='secretphrase_row'>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                    </div>
                    <div className='secretphrase_row'>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                    </div>
                    <div className='secretphrase_row'>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                        <input className="secret_text" type="password"></input>
                    </div>
                </div>
                <div className='copy_to_clipboard'>
                    <img className='clipboard' src={CLIPBOARD} alt="clipboard" />
                    <div className='clipboard_stmt'> Copy to clipboard</div>
                </div>
                <Link className='Continue_SecretPhrasePage' type='submit' component={UserNamePage} >Continue</Link>
            </form>
        </div>
    )
}

export default SecretPhrasePage