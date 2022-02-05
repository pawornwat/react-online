import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { UserStoreContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const userStore = React.useContext(UserStoreContext);
  const profileRedux = useSelector((state) => state.authReducer.profile)

  // const [profile, setProfile] = useState(null);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"));
    if (profileValue) {
      // setProfile(profileValue);
      userStore.updateProfile(profileValue)
      console.log(userStore.profile)
    }
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    addToast("ลงชื่อออกสำเร็จ", { appearance: "success", autoDismiss: true });
    history.replace("/");
    history.go(0);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/" exact>
            React-Bootstrap
          </NavLink>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
              <NavLink className="nav-link" to="/detail">
                Detail
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
              <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/hospitalPage");
                  }}
                >
                  Hospital List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/category");
                  }}
                >
                  News Category
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/upload"
              >
                Upload
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/member"
              >
                Member {profileRedux.name}
              </NavLink>
            </Nav>
            {userStore.profile ? (
              <span className="nav-text">
                Welcome {userStore.profile.name}{" "}
                <button onClick={logout} className="btn btn-danger ml-2">
                  Logout
                </button>
              </span>
            ) : (
              <>
                <Nav>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/register"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
