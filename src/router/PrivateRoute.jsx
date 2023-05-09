import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let auth = localStorage.getItem('refresh_token') ? true : false;
    const conditionalRendering = () => {
        return !auth ? 
            <Navigate to="/login"/>
            :
            <Outlet/>
    }
    return conditionalRendering();
}

export default PrivateRoute;