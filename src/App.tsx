import LogoPage from "./components/LogoPage/LogoPage"
import UserNamePage from './components/UserNamePage/UserNamePage';
import BackUpPage from './components/BackUpPage/BackUpPage';
import PasswordPage from './components/PasswordPage/PasswordPage';
import FinalPage from './components/FinalPage/FinalPage';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
  return (
    <div className='App'>
      <Router >
        <LogoPage />
      </Router>
    </div >
  );
}

export default App;
