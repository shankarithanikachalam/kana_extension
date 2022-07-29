import React, { useState, useEffect } from 'react';
import LOGO from "../../assets/images/logo.png";
import IntroductionPage from '../IntroductionPage/IntroductionPage';
import './LogoPage.css';
function LogoPage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      {loading === true ? (
        <div className="LogoPage">
          <img className='logo'src={LOGO} alt="logo" />
        </div>
      ) : (
        <IntroductionPage />
      )}
    </>
  );
}

export default LogoPage;
