import { useState } from "react";
import Card from "../Card/Card";
import axios from "../../api/axios";
import Swal from "sweetalert2";

const Login = ({navigate}) => {
    const [data, setData] = useState({
        email: '',
        pwd: ''
    });

    const handle = e => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        
    };

    const login = async e => {
        try {
            e.preventDefault();
            
            const result = await axios.post('/login', data);

            if(!result.data?.tokens) throw result.data;

            localStorage.setItem('access_token', result.data.tokens.accessToken);
            localStorage.setItem('refresh_token', result.data.tokens.refreshToken);
            localStorage.setItem('role', result.data.role.name)
            
            navigate('/');
        } catch (error) {
            if(error.icon === 'warning'){
                Swal.fire({
                    icon: error.icon,
                    text: error.message,
                    showCancelButton: true,
                    confirmButtonText: 'Close other sessions?',
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                        Swal.fire((await axios.delete('/logoutNoAuth', {data})).data);
                    } else if (result.isDenied) {
                      Swal.fire('Changes are not saved', '', 'info')
                    }
                  })
            } else {
                Swal.fire({
                    icon: error.icon,
                    text: error.message
                });
            }
        }
    }
    
    const cardProps = {
        cardType: 1,
        title: 'Welcome to ULib',
        subtitleProps: {
            subTitle: 'Please log in to continue',
            customClass: 'mb-2 text-body-secondary'
        },
        form: {
            fields: [
                {
                    fieldType: 0,
                    label: {
                        text: 'Email'
                    },
                    input: {
                        type: 'email',
                        id: 'email',
                        value: data.email,
                        onChange: e => handle(e)
                    }
                },
                {
                    fieldType: 0,
                    label: {
                        text: 'Password'
                    },
                    input: {
                        type: 'password',
                        id: 'pwd',
                        value: data.pwd,
                        onChange: e => handle(e)
                    }
                }
            ],
            buttons: [
                {
                    internalButtonType: 0,
                    text: 'Log in',
                    className: 'btn-primary centeredOrphan',
                    onClick: e => login(e)
                }
            ],
            style: {
                display: 'grid'
            }
        },
        className: 'centeredChild',
        style: {
            width: 20 + 'rem'
        }
    };

    return <Card {...cardProps} />
}

export default Login;