import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./PrivateRoute";
import Users from "../components/Pages/Users";
import Books from "../components/Pages/Books";
import Login from "../components/Pages/Login";

const Router = () => {

    console.log(routes);
    return <ReactRouter>
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path="/users" element={<Users/>} className='nav-link' />
                <Route path="/books" element={<Books/>} className='nav-link' />
            </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
    </ReactRouter>
};

export default Router;