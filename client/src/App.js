import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import './App.css';
import Register from './components/layouts/auth/Register';
import Login from './components/layouts/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
    </Fragment>
    </Router>
  );
}

export default App;
