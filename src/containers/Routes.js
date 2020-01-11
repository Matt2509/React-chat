import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { FormattedMessage } from "react-intl";

import Chat from "../components/chat";
import Login from "../components/login";
//import Settings from "./Settings";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">
            log
          </Link>
        </li>
        <li>
           <Link to="/chat">
             chat
          </Link> 
        </li>
      </ul>

      <hr />

      <Route path="/" exact component={Login} />
      <Route path="/chat" exact component={Chat} />
    </div>
  </Router>
);

export default Routes;