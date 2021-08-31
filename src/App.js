import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import SellerRoute from "./components/SellerRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";
import logo from "./Assets/images/fortisLogo.png";
import AppStore from "./screens/AppStore";
import AddCategory from "./screens/addCategory";
import axios from "../node_modules/axios/index";
import CategorySorting from "./screens/categorySorting";
import AuctionScreen from "./components/CreateAuction";
import Market from "./screens/Market";

function App(props) {
  var [category, setCategory] = useState([]);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const fetchAlldata = () => {
    axios.get(`https://fortisab.com/api/users/getCategory/art`).then((res) => {
      res.data.forEach((element) => {
        if (element.categoryItem && !category.includes(element.categoryItem)) {
          setCategory((oldArray) => [...oldArray, element.categoryItem]);
          console.log(element.categoryItem, category.length);
          category = category.filter(function (value, index, array) {
            return array.indexOf(value) == index;
          });
        }
      });
    });
  };

  useEffect(() => {
    fetchAlldata();
  }, []);

  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* updated */}
        <header className="row" id="header">
          <div>
            <Link className="brand" to="/">
              <img src={logo} width="100px"></img>
            </Link>
          </div>
          <div className="search-box">
            <i
              style={{ fontSize: "2rem", color: "#f0c040" }}
              className="fa fa-search"
            ></i>
            <input
              placeholder="Search Fortis"
              type="search"
              id="search-box-input"
            />
          </div>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {"Marketplace"} <i className="fa fa-caret-down"></i>
                </Link>
                <ul
                  className="dropdown-content"
                  style={{
                    maxHeight: "95vh",
                    overflowY: "auto",
                    width: "200px",
                  }}
                >
                  <Link to={`/`}>{"All NFT"}</Link>
                  {category.map((item) => (
                    <li>
                      <Link to={`/category/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <Link to="#">
                  {"Marketplace"} <i className="fa fa-caret-down"></i>
                </Link>
                <ul
                  className="dropdown-content"
                  style={{
                    maxHeight: "95vh",
                    overflowY: "scroll",
                    width: "200px",
                  }}
                >
                  {category.map((item) => (
                    <li>
                      <Link to={`/category/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {userInfo ? <Link to="/AppStore">App Store</Link> : null}
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/addCategory">Category</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route
            path="/auction/:id/edit"
            component={AuctionScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/AppStore" component={AppStore}></Route>
          <Route path="/addCategory" component={AddCategory}></Route>
          <Route path="/category/:id" component={CategorySorting}></Route>

          <Route path="/market" component={Market}></Route>

          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>

          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        {/* <footer
          className="row center footer"
          style={{ justifyContent: "space-evenly" }}
        >
          <div>
            <div
              className="search-box"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <i
                style={{ fontSize: "2rem", color: "#f0c040" }}
                className="fa fa-envelope"
              ></i>
              <input
                placeholder="Your e-mail"
                type="search"
                id="search-box-input"
              />
            </div>
            <h3>Get the latest Fortis updates</h3>
          </div>
          <div className="Marketplace-place" style={{ textAlign: "center", listStyle: "none" }}>
            <h3>Explore Marketplace</h3>
            <div
              style={{ textAlign: "left", maxHeight: "20rem", display: "flex" }}
            >
              <div style={{ margin: "5px" }}>
                {" "}
                {category.map((item, index) =>
                  index < 5 ? (
                    <li>
                      <Link to={`/category/${item}`}>{item}</Link>
                    </li>
                  ) : null
                )}
              </div>
              <div style={{ maxHeight: "20rem", margin: "5px" }}>
                {category.map((item, index) =>
                  5 < index ? (
                    <li>
                      <Link to={`/category/${item}`}>{item}</Link>
                    </li>
                  ) : null
                )}
              </div>
            </div>
          </div>

          <a href="#header">
            <div
              style={{
                padding: "5px",
                backgroundColor: "#F1C359",
                borderRadius: "5px",
                color: "black",
              }}
            >
              <i
                class="fa fa-arrow-up"
                style={{ color: "black" }}
                aria-hidden="true"
              ></i>
              Go Top
            </div>
          </a>
        </footer> */}
        {/* <div
          className="copyright"
          style={{
            textAlign: "center",
            backgroundColor: "#f0c040",
            fontWeight: "bold",
          }}
        >
          {" "}
          MegaHoot Technologies, Inc All Rights Reserved
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
