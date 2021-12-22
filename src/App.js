import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import DetailPage from "./components/DetailPage";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/about"><AboutPage/></Route>
          <Route path="/detail"><DetailPage/></Route>
          <Route path="/product"><ProductPage/></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
