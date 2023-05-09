import { inputTypes } from "../../../utils";

const Input = props => {
    const { internalInputType } = props;
    return inputTypes[internalInputType](props);
}

export default Input;