import * as React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { routeConstants } from "./constants/route-const";
import { Navbar } from "./components/navigation/navbar";

// Pages imports.
const Login = React.lazy(() => import("@/pages/auth/Login"))
const Home =React.lazy(() => import("@/pages/Home"));

const Routes = () => {

   return (
      <React.Suspense fallback={<p>Loading...</p>}>
         <Navbar />

         <Router>
            <Route index element={<Navigate to={routeConstants.login} />} />
            <Route path={routeConstants.login} element={<Login />} />
            <Route path={routeConstants.home} element={<Home />} />
         </Router>
      </React.Suspense>
   )
}

export default Routes;