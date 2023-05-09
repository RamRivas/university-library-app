import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Page = ({children, history}) => {
    const isLoggedIn = Boolean(localStorage.getItem('refresh_token'));
    console.log(children);

    const logout = () => {
        localStorage.removeItem('refresh_token');
        history.push('/login');
    }

    const conditionalRender = () =>{
        if(isLoggedIn){
            return <nav className='nav w-100'>
                <div className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </div>
                <div className='nav-item'>
                    <Link className='nav-link' to='/users'>Users</Link>
                </div>
                <div className='nav-item'>
                    <Link className='nav-link' to='/books'>Books</Link>
                </div>
                <div className='nav-item ml-auto'>
                    <button className='nav-link' onClick={logout}>Log out</button>
                </div>
            </nav>
        }
    }

    return (
        <div className='fatherOfCenteredChilds'>
            {conditionalRender()}
            <main>{children}</main>
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.node
}

export default Page