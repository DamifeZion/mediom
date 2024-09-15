import * as React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { routeConstants } from "./constants/route-const";
import { Navbar } from "./components/navigation/navbar";
import { LoadingHome } from "./components/loading-home";
import CreateBlog from "./pages/Create";

// Pages imports.
const Login = React.lazy(() => import("@/pages/auth/Login"))
const Home =React.lazy(() => import("@/pages/Home"));
const BlogDetails = React.lazy(() => import("@/pages/BlogDetails"))

const Routes = () => {

   return (
      <React.Suspense fallback={<LoadingHome/>}>
         <Navbar />

         <Router>
            <Route index element={<Navigate to={routeConstants.login} />} />
            <Route path={routeConstants.login} element={<Login />} />
            <Route path={routeConstants.home} element={<Home />} />
            <Route path={routeConstants.blogDetails} element={<BlogDetails />}/>
            <Route path={routeConstants.create} element={<CreateBlog />}/>
         </Router>
      </React.Suspense>
   )
}

export default Routes;