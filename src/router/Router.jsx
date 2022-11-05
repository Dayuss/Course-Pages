import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Event } from "../components/pages/Event";
import { DefautLayout } from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefautLayout>
            <Event />
          </DefautLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
