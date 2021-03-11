// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home from './Home'
import Help from './Help'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// const About = () => (
//   <>
//     <h1>About</h1>
//     <p>alkjsdlkjalskjdalksjd</p>
//   </>
// )

const Host = () => <h1>Host</h1>
const Guest = () => <h1>Geust</h1>
const Signup = () => <h1>SignUp</h1>

const Login = () => <h1>Login</h1>

const Page404 = () => <h1>Page Not Found</h1>

function App() {
  return (
    <Router>
        <Route path='/' component={NavBar} />
        <Switch>          
          
          <Route 
            path='/' 
            exact 
            render={(props) => {
              return (
                <Home history={props.history} match={props.match}/>
                )
              }} />

          <Route path="/host" component={Host} />
          <Route path="/guest" component={Guest} />

          <Route path="/help" component={Help} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route>
            <Page404 />
          </Route>
            
        </Switch>


    </Router>
  );
}

export default App;

/* <NavBar /> */
          /* second way to display a component via Route */

/* first way to display a component via Route */
//  <Route path='/' exact component={Home} />
 /* second way to display a component via Route */
//  <Route path='/' exact component={() => {
//    return (
//      <Home />
//    )
//  }} />

 /* third way to display a component via Route */
//  <Route path='/' exact>
//    <Home />
//  </Route>


        /* <Route path='/about' component={About} /> */
        /* <Route path='/dashboard' component={Dashboard} /> */
        /* <Route path='/user:id'>
          <h1>user</h1>
          <Route>Profile</Route>
          <Route>Setting</Route>
        </Route> */