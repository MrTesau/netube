import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
// Pages > Containers > Components > styled MarkUp
import { Home } from "./pages";

function App() {
  return (
    <Router exact path={ROUTES.HOME}>
      <Home />
    </Router>
  );
}

export default App;
