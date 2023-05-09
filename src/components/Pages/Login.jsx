import { useState } from "react";
import Card from "../Card/Card";
import axios from "../../api/axios";

const Login = () => {
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
        e.preventDefault();
        
        const result = await axios.post('/login', data);
        console.log(result);
    }
    
    const props = {
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

    return <Card {...props} />
}

export default Login;