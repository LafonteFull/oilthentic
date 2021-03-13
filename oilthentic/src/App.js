import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './views'
import { Navbar } from './components'

import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
