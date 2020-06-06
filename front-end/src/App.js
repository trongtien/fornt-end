import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import HeaderComponent from './components/Header/HeaderConponent'
import Loading from './components/Loading/Loading'
import LoginComponent from './components/Login/LoginComponent'
import SliderComponent from './components/slider/SliderComponent'
import FooterComponent from './components/Footer/FooterComponent'

const HeaderComponent = lazy(() => import('./components/Header/HeaderConponent'))

// import HomePage from './pages/HomePage'
// import RegisterPage from './pages/RegisterPage'
// import IntroductionPage from './pages/IntroductionPage'

const HomePage = lazy(() => import('./pages/HomePage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const IntroductionPage = lazy(() => import('./pages/IntroductionPage'))
const CardPage = lazy(() => import('./pages/CardPages'))

function App(props) {

  const [isShowLogin, setIsShowLogin] = useState(false);

  function handleLoginClick() {
    let newShowLogin = isShowLogin
    if (newShowLogin === undefined) return
    setIsShowLogin(!newShowLogin)
  }

  function onClickCloseLogin() {
    let newIsShowLogin = isShowLogin
    if (newIsShowLogin === undefined) return
    setIsShowLogin(!newIsShowLogin)
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="App">

          {isShowLogin === true ? <LoginComponent hanldeClickClose={onClickCloseLogin} /> : ""}
          <HeaderComponent
            onClickLogin={handleLoginClick}
          />
          <SliderComponent />
          <div className="container-fluid">

            <Switch>
              <Route exact path="/">
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              </Route>
              <Route path="/Introduction">
                <Suspense fallback={<Loading />}>
                  <IntroductionPage />
                </Suspense>
              </Route>
              <Route path="/register">
                <Suspense fallback={<Loading />}>
                  <RegisterPage
                    onClickLogin={handleLoginClick}
                  />
                </Suspense>

              </Route>
              <Route path="/card">
                <Suspense fallback={<Loading />}>
                  <CardPage />
                </Suspense>
              </Route>
            </Switch>

          </div>
          <FooterComponent />
        </div>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
