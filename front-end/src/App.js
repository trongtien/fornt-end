import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './components/Header/HeaderConponent'
import LoginComponent from './components/Login/LoginComponent'
import SliderComponent from './components/slider/SliderComponent'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import IntroductionPage from './pages/IntroductionPage'

const App = (props) => {

  const [isShowLogin, setIsShowLogin] = useState(false);
  function handleLoginClick() {
    let newShowLogin = isShowLogin
    if (newShowLogin === undefined) return
    setIsShowLogin(!newShowLogin)
  }
  return (
    <BrowserRouter>
      <div className="App">
        {isShowLogin === true ? <LoginComponent /> : ""}
        <HeaderComponent
          onClickLogin={handleLoginClick}
        />
        <SliderComponent />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Introduction">
              <IntroductionPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
