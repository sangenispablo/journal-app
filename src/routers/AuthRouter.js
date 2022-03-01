import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  const match = useRouteMatch();
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path={`${match.path}/login`}>
            <LoginScreen />
          </Route>

          <Route exact path={`${match.path}/register`}>
            <RegisterScreen />
          </Route>

          <Redirect to={"/auth/login"} />
        </Switch>
      </div>
    </div>
  );
};
