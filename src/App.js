import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import classes from './App.module.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <section>
          <div className={classes.Container}>
              <Switch>
                <Route path="/" exact component={Home}/>
              </Switch>
            </div>
        </section>
        <Footer></Footer>
    </Router>
  );
}

export default App;
