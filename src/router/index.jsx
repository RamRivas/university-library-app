import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/Pages/Home";
import Users from "../components/Pages/Users";
import Books from "../components/Pages/Books";
import Login from "../components/Pages/Login";

const Router = () => {
    const navigate = useNavigate();
    return <Routes>
        <Route Component={PrivateRoute}>
            <Route path="/" element={<Home navigate={navigate} />} className='nav-link' />
            <Route path="/users" element={<Users navigate={navigate} />} className='nav-link' />
            <Route path="/books" element={<Books navigate={navigate} />} className='nav-link' />
        </Route>
        <Route path="/login" element={<Login navigate={navigate} />} />
    </Routes>
};

export default Router;