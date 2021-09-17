import Contact_us from "./components/pages/contact_us/Contact_us";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact_us' component={Contact_us} />
        {/* <Route path='/about' component={About} /> */}
      </Switch>
    </Router>
  );
}

export default App;
