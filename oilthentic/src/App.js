import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { Home, SignUp, Thankyou, Page404, OTP } from './views'
import { Navbar, Footer } from './components'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/sign-up/otp" component={OTP} />
          <Route path="/sign-up" component={SignUp} />
          <Route path='/thank-you' component={Thankyou} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Page404} />
        </Switch>
      <Footer />
      </Router>
    </Provider>
  );
}

export default App;
