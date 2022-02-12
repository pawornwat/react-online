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
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastProvider } from "react-toast-notifications";
import PrivateRoute from "./guard/auth";
import MemberPage from "./pages/MemberPage";
import UserStoreProvider from "./context/UserContext";

// redux setup
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import CartPage from "./pages/CartPage";
const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact_us">
                <ContactUs />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/detail/:id/title/:title">
                <DetailPage />
              </Route>
              <Route path="/hospital">
                <HospitalPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/upload">
                <UploadPage />
              </Route>
              <Route path="/cart">
                <CartPage />
              </Route>
              <PrivateRoute path="/member">
                <MemberPage />
              </PrivateRoute>
              {/* makesense */}
              <Route
                path="/category"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} exact>
                      <IndexPage />
                    </Route>
                    <Route path={`${url}/create`}>
                      <CreatePage />
                    </Route>
                    <Route path={`${url}/edit/:id`}>
                      <EditPage />
                    </Route>
                  </>
                )}
              ></Route>
            </Switch>
            <Footer />
          </Router>
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}
export default App;
