import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Addnew from './components/Addnew/Addnew';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Manageorder from './components/Manageorder/Manageorder';
import Myorders from './components/Myorders/Myorders';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home></Home>
          </Route>
          <Route path={"/home"}>
            <Home></Home>
          </Route>
          <Route path={"/myorder"}>
            <Myorders></Myorders>
          </Route>
          <Route path={"/manageorder"}>
            <Manageorder></Manageorder>
          </Route>
          <Route path={"/addnew"}>
            <Addnew></Addnew>
          </Route>
          <Route path={"/about"}>
            <About></About>
          </Route>
          <Route path={"/contact"}>
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
