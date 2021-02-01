import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
// Pages > Containers > Components > styled MarkUp
import { Home, Browse, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}

export default App;
