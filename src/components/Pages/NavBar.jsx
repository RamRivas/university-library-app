import { useNavigate } from "react-router";
import { axiosPrivate } from "../../api/axios";
import Swal from "sweetalert2";

const NavBar = () => {
    const navigate = useNavigate();
    const isLoggedIn = Boolean(localStorage.getItem('refresh_token'));

    const logout = async () => {
        try {
            const data = {
                token: localStorage.getItem('refresh_token')
            };
    
            const result = await axiosPrivate.delete('/logout', { data });
    
            localStorage.removeItem('refresh_token');
            
            await Swal.fire(result.data);
            
            navigate('/login');
        } catch (error) {
            Swal.fire({
                icon: error.icon,
                text: error.message
            });
        }
    }

    const conditionalRender = () =>{
        if(isLoggedIn){
            return <nav className='nav w-100 text-bg-light'>
                <div className='nav-item'>
                    <a className='nav-link' href='/'>Home</a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='/users'>Users</a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='/books'>Books</a>
                </div>
                <div className='nav-item ml-auto'>
                    <button className='nav-link' onClick={logout}>Log out</button>
                </div>
            </nav>
        }
    }

    return conditionalRender();
}

export default NavBar;