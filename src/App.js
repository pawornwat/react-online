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
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";

function App() {
  return (
    <>
      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/hospitalPage">
            <HospitalPage />
          </Route>
          {/* <Route path='/category'><IndexPage/></Route> */}
          <Route path="/category"
            render={({ match: { url } }) => (
              <>
              <Route path={`${url}/`} exact><IndexPage /></Route>
              <Route path={`${url}/create`}><CreatePage/></Route>
              <Route path={`${url}/edit/:id`}><EditPage/></Route>
              </>
              
            )}>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
