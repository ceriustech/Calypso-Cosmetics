import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createdUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import LipGloss from "./pages/lip-gloss/lip-gloss.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component";

import "./App.css";

class App extends Component {
  // state = {
  //   currentUser: null,
  // };

  userLoginStatus = null;

  componentDidMount() {
    this.userLoginStatus = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createdUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.userLoginStatus();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/lip-gloss" component={LipGloss} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
