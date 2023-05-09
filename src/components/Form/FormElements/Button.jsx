import { buttonTypes } from "../../../utils";

const Button = props => {
    const {internalButtonType} = props;
    return buttonTypes[internalButtonType](props);
}

export default Button;