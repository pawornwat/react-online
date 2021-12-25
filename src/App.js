import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Navber from "./components/Navbar";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/about"><AboutPage/></Route>
          <Route path="/detail/:id/title/:title"><DetailPage/></Route>
          <Route path="/product"><ProductPage/></Route>
          <Route path="/contact"><ContactUs/></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
