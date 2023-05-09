import { labelTypes } from "../../../utils";

const Label = props => {
    const { labelType } = props;

    return labelTypes[labelType](props);
}

export default Label;