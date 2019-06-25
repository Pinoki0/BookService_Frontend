import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Components/privateRoute.component";
import Dashboard from "./Components/dashboard.component";
import AddBook from "./Components/addBook.component";
import Home from "./Components/home.component";
import Regulations from "./Components/regulations.component";
import AddNews from "./Components/addNews.component";
import BooksSearch from "./Components/books.component";
import EditNews from "./Components/editNews.component"
import DeleteNews from "./Components/deleteNews.component"
import Landing from "./Components/landing.component"
import Navbar from "./Components/navbar.component"
import Register from "./auth/Register"
import Login from "./auth/Login"
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
    }
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div >
                        <div className="App">
                            <Navbar />
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route path="/home" component={Home} />
                            <Route path="/book" component={BooksSearch} />
                            <PrivateRoute exact path="/news/addNews" component={AddNews} />
                            <PrivateRoute exact path="/books/addBook" component={AddBook} />
                            <Route path="/regulations" component={Regulations} />
                            <PrivateRoute exact path="/edit/:id" component={EditNews} />
                            <PrivateRoute exact path="/delete/:id" component={DeleteNews} />
                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            </Switch>
                        </div>


                    <br/>
                </div>
            </Router>
            </Provider>
        );
    }
}

export default App;
