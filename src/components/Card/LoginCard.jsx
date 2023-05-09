import Card from "./Card";

const LoginCard = () => {
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
                        id: 'loginEmail'
                    }
                },
                {
                    fieldType: 0,
                    label: {
                        text: 'Password'
                    },
                    input: {
                        type: 'password',
                        id: 'loginPassword'
                    }
                }
            ],
            buttons: [
                {
                    internalButtonType: 0,
                    text: 'Log in',
                    className: 'btn-primary centeredOrphan'
                }
            ],
            style: {
                display: 'grid'
            }
        },
        className: 'centeredChild',
        style: {
            width: 18 + 'rem'
        }
    };

    return <Card {...props} />
}

export default LoginCard;