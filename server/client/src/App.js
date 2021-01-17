import { Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";

// app
function App() {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
    </Switch>
  );
}

export default App;
