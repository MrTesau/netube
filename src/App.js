import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./routes";
// Front End Layout:
// Pages > Containers > Components > styled MarkUp
import { Home, Browse, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}
export default App;
