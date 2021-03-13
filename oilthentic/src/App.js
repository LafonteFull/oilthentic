import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home, SignUp } from './views'
import { Navbar } from './components'

import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
