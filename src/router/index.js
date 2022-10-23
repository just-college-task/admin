import React from "react";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "@/store/actions";
import Layout from "@/views/layout";
import Login from "@/views/login";


class Router extends React.Component {
  render() {
    const { token, role, getUserInfo } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              } else {
                if (role) {
                  return <Layout />;
                } else {
                  console.log("router/index.js 获取个人身份信息",token);
                  getUserInfo(token).then(() => <Layout />).catch((e) => { alert("router/index.js 获取个人信息失败"); });
                }
              }
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect((state) => state.user, { getUserInfo })(Router);
