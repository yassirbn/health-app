import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { auth } from "./Services/firebase";
import { PrivateRoute, PublicRoute } from "./Common/AuthGuard";

// Pages
import LoginPage from "./Views/LoginPage";
import RegisterPage from "./Views/RegisterPage";
import DoctorRegisterPage from "./Views/DoctorRegisterPage";
import HomePage from "./Views/HomePage";
import Navbar from "./Views/Navbar";
import ForgotPasswordPage from "./Views/ForgotPasswordPage";

class RouteConfig extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: Boolean,
    };
  }

  componentDidMount() {
    this.authlistener = auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
          currentUser: true,
        });
      } else {
        localStorage.removeItem("user");
        this.setState({
          currentUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.authlistener();
  }

  render() {
    return (
      <Switch>
        <Route exact path={"/home"} component={HomePage} />
        <PublicRoute
          currentUser={this.state.currentUser}
          path={"/login"}
          component={LoginPage}
        />
        <PublicRoute
          currentUser={this.state.currentUser}
          path={"/register/doctor"}
          component={DoctorRegisterPage}
        />
        <PublicRoute
          currentUser={this.state.currentUser}
          path={"/register"}
          component={RegisterPage}
        />
        <PublicRoute
          currentUser={this.state.currentUser}
          path={"/forgot"}
          component={ForgotPasswordPage}
        />
        <PrivateRoute
          currentUser={this.state.currentUser}
          path="/"
          component={Navbar}
        />
      </Switch>
    );
  }
}

export default withRouter(RouteConfig);
