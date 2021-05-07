import React, { Suspense } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import Loader from "../loader/Loader";

const Main = () => (
  <main>
    <Suspense fallback={<Loader />}>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </main>
);

export default Main;