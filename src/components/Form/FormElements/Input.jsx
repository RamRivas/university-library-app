import { inputTypes } from "../../../utils";

const Input = props => {
    const { internalInputType, input } = props;
    return inputTypes[internalInputType](input);
}

export default Input;