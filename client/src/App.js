import React, { useState, useEffect } from "react";
import "./App.css";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Portfolio from "./components/Portfolio/index";
import Conditionals from "./components/Sidebar/sidebarConditionals";
import Auth from "./utils/auth";
import Public from "./components/Portfolio/Public";
import Preview from './components/Portfolio_Preview/practiceIndex'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let status = Auth.loggedIn();
    console.log(status);
    setLoggedIn(status);
  }, []);

  const httpLink = createHttpLink({
    uri: "/graphql",
  });
  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/portfolio/:email" component={Public} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/conditionals" component={Conditionals} />
            <Route exact path="/portfolio/:email" component={Public} />
          </Switch>
        )}
      </Router>
    </ApolloProvider>
    // <Preview/>
  );
}
