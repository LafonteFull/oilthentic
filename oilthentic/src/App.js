import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Home, Thankyou, Page404 } from './views'
import { Navbar, Footer } from './components'
import './App.css';
import ScrollToTop from './components/ScrollToTop'

function App() {
  // const[isAutheticated, setisAutheticated] = useState(false)
  
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // const preSignUp = () => {
  //   setisAutheticated(true)
  // }

  return (
    <Provider store={store}>
      <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>
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
