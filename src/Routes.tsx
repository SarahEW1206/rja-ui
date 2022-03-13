import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";

import { Homepage } from "./Homepage";

export const Routes = () => (
  <BrowserRouter>
    <BrowserRoutes>
      <Route path="/" element={<Homepage />} />
    </BrowserRoutes>
  </BrowserRouter>
);
